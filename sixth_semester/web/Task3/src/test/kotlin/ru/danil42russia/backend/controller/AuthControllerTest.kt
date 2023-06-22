package ru.danil42russia.backend.controller

import com.github.javafaker.Faker
import org.junit.jupiter.api.Test
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.http.MediaType
import org.springframework.test.web.servlet.get
import org.springframework.test.web.servlet.post
import ru.danil42russia.backend.base.IntegrationControllerTest
import ru.danil42russia.backend.dto.LoginRequest
import ru.danil42russia.backend.dto.RegisterRequest
import ru.danil42russia.backend.dto.RegisterResponse
import ru.danil42russia.backend.dto.TokenResponse

@SpringBootTest
@AutoConfigureMockMvc
internal class AuthControllerTest : IntegrationControllerTest() {
    private val baseUrl = "/api/auth"

    @Test
    fun `should register a new user`() {
        val registerRequest = RegisterRequest("user", "user_login", "password")
        val registerResponse = RegisterResponse("user", "user_login")

        mockMvc.post("$baseUrl/register") {
            jsonRequestEntity(registerRequest)
        }.andExpect {
            status { isCreated() }
            content {
                jsonResponseEntity(registerResponse)
            }
        }.andDo { print() }
    }

    @Test
    fun `should return an error if the specified username exists`() {
        val registerRequest = RegisterRequest("user", "user_login", "password")

        mockMvc.post("$baseUrl/register") {
            jsonRequestEntity(registerRequest)
        }.andExpect {
            status { isCreated() }
        }

        mockMvc.post("$baseUrl/register") {
            jsonRequestEntity(registerRequest)
        }.andExpect {
            status { isBadRequest() }
            content {
                jsonResponseError("user with username ${registerRequest.username} already exist")
            }
        }.andDo { print() }
    }

    @Test
    fun `should login success`() {
        val registerRequest = fakeRegisterRequest()
        val loginRequest = LoginRequest(registerRequest.username, registerRequest.password)

        mockMvc.post("$baseUrl/register") {
            jsonRequestEntity(registerRequest)
        }.andExpect {
            status { isCreated() }
        }

        mockMvc.get("$baseUrl/login") {
            jsonRequestEntity(loginRequest)
        }.andExpect {
            status { isOk() }
            content {
                contentType(MediaType.APPLICATION_JSON)
                jsonPath("access_token") { isNotEmpty() }
            }
        }.andDo { print() }
    }

    @Test
    fun `should return an error if a username is specified that does not exist`() {
        val loginRequest = LoginRequest("not_user_exist", "password")

        mockMvc.get("$baseUrl/login") {
            jsonRequestEntity(loginRequest)
        }.andExpect {
            status { isNotFound() }
            content {
                jsonResponseError("user with username or password not found")
            }
        }.andDo { print() }
    }

    @Test
    fun `should return an error if an existing user has an invalid password`() {
        val registerResponse = registerNewUser()
        val loginRequest = LoginRequest(registerResponse.username, "invalid_password")

        mockMvc.get("$baseUrl/login") {
            jsonRequestEntity(loginRequest)
        }.andExpect {
            status { isNotFound() }
            content {
                jsonResponseError("user with username or password not found")
            }
        }.andDo { print() }
    }

    @Test
    fun `should successfully login with the token`() {
        val token = prepareToken()

        mockMvc.get("/api/banks") {
            header("Authorization", "Bearer $token")
        }.andExpect {
            status { isOk() }
        }.andDo { print() }
    }

    @Test
    fun `should return an error if given the incorrect token`() {
        val token = "incorrect_token"

        mockMvc.get("/api/banks") {
            header("Authorization", "Bearer $token")
        }.andExpect {
            status { isForbidden() }
            content {
                jsonResponseError("authentication error")
            }
        }.andDo { print() }
    }

    @Test
    fun `should return an error if the header is incomplete`() {
        val token = prepareToken()

        mockMvc.get("/api/banks") {
            header("Authorization", token)
        }.andExpect {
            status { isForbidden() }
            content {
                jsonResponseError("not authenticated")
            }
        }.andDo { print() }
    }

    @Test
    fun `should return an error if a header is not given`() {
        mockMvc.get("/api/banks")
            .andExpect {
                status { isForbidden() }
                content {
                    jsonResponseError("not authenticated")
                }
            }.andDo { print() }
    }

    private fun prepareToken(): String {
        val registerRequest = fakeRegisterRequest()
        registerNewUser(registerRequest)

        val loginRequest = LoginRequest(registerRequest.username, registerRequest.password)

        val request = mockMvc.get("$baseUrl/login") {
            jsonRequestEntity(loginRequest)
        }.andExpect {
            status { isOk() }
        }.andReturn()

        val tokenResponse = objectMapper.readValue(request.response.contentAsString, TokenResponse::class.java)
        return tokenResponse.accessToken
    }

    private fun registerNewUser(registerRequest: RegisterRequest = fakeRegisterRequest()): RegisterResponse {
        val request = mockMvc.post("$baseUrl/register") {
            jsonRequestEntity(registerRequest)
        }.andExpect {
            status { isCreated() }
        }.andReturn()

        return objectMapper.readValue(request.response.contentAsString, RegisterResponse::class.java)
    }

    private fun fakeRegisterRequest(): RegisterRequest {
        val faker = Faker()
        return RegisterRequest(
            name = faker.name().name(),
            username = faker.name().username(),
            password = faker.internet().password(),
        )
    }
}
