package ru.danil42russia.backend.base

import com.fasterxml.jackson.databind.ObjectMapper
import io.zonky.test.db.AutoConfigureEmbeddedDatabase
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.MediaType
import org.springframework.test.annotation.DirtiesContext
import org.springframework.test.web.servlet.MockHttpServletRequestDsl
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.result.ContentResultMatchersDsl

@AutoConfigureEmbeddedDatabase(
    provider = AutoConfigureEmbeddedDatabase.DatabaseProvider.ZONKY,
    refresh = AutoConfigureEmbeddedDatabase.RefreshMode.AFTER_EACH_TEST_METHOD
)
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
internal abstract class IntegrationControllerTest {

    @Autowired
    lateinit var mockMvc: MockMvc

    @Autowired
    lateinit var objectMapper: ObjectMapper

    fun MockHttpServletRequestDsl.jsonRequestEntity(value: Any) {
        contentType = MediaType.APPLICATION_JSON
        content = value.toJsonValue()
    }

    fun ContentResultMatchersDsl.jsonResponseEntity(value: Any) {
        contentType(MediaType.APPLICATION_JSON)
        json(value.toJsonValue(), true)
    }

    fun ContentResultMatchersDsl.jsonResponseError(message: String) {
        val errorMessage = mapOf("message" to message)
        jsonResponseEntity(errorMessage)
    }

    private fun <T : Any> T.toJsonValue() = objectMapper.writeValueAsString(this)
}
