package ru.danil42russia.backend.controller

import org.junit.jupiter.api.Test
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.http.MediaType
import org.springframework.test.web.servlet.delete
import org.springframework.test.web.servlet.get
import org.springframework.test.web.servlet.patch
import org.springframework.test.web.servlet.post
import ru.danil42russia.backend.base.IntegrationControllerTest
import ru.danil42russia.backend.model.Bank

@SpringBootTest
@AutoConfigureMockMvc(addFilters = false)
internal class BankControllerTest : IntegrationControllerTest() {
    private val baseUrl = "/api/banks"

    @Test
    fun `should return all banks`() {
        mockMvc.get(baseUrl)
            .andExpect {
                status { isOk() }
                content {
                    contentType(MediaType.APPLICATION_JSON)
                    jsonPath("$[0].account_number") { value("1234") }
                    jsonPath("$.size()") { value(3) }
                }
            }.andDo { print() }
    }

    @Test
    fun `should return bank on account number`() {
        val bank = Bank("1234", 2.72, 13)

        mockMvc.get("$baseUrl/${bank.accountNumber}")
            .andExpect {
                status { isOk() }
                content {
                    jsonResponseEntity(bank)
                }
            }.andDo { print() }
    }

    @Test
    fun `should return an error if there is no bank with specified account number`() {
        val accountNumber = "not_exist"

        mockMvc.get("$baseUrl/$accountNumber")
            .andExpect {
                status { isNotFound() }
                content {
                    jsonResponseError("bank with account number $accountNumber not found")
                }
            }.andDo { print() }
    }

    @Test
    fun `should add new bank`() {
        val newBank = Bank("4567", 5.15, 45)

        mockMvc.post(baseUrl) {
            jsonRequestEntity(newBank)
        }.andExpect {
            status { isCreated() }
            content {
                jsonResponseEntity(newBank)
            }
        }

        mockMvc.get("$baseUrl/${newBank.accountNumber}")
            .andExpect {
                status { isOk() }
                content {
                    jsonResponseEntity(newBank)
                }
            }.andDo { print() }
    }

    @Test
    fun `should return an error if a bank with specified account number exists`() {
        val existBank = Bank("1234", 5.15, 45)

        mockMvc.post(baseUrl) {
            jsonRequestEntity(existBank)
        }.andExpect {
            status { isBadRequest() }
            content {
                jsonResponseError("bank with account number ${existBank.accountNumber} already exist")
            }
        }.andDo { print() }
    }

    @Test
    fun `should update an existing bank`() {
        val updatedBank = Bank("1234", 2.2, 17)

        mockMvc.patch("$baseUrl/${updatedBank.accountNumber}") {
            jsonRequestEntity(updatedBank)
        }.andExpect {
            status { isOk() }
            content {
                jsonResponseEntity(updatedBank)
            }
        }

        mockMvc.get("$baseUrl/${updatedBank.accountNumber}")
            .andExpect {
                status { isOk() }
                content {
                    jsonResponseEntity(updatedBank)
                }
            }.andDo { print() }
    }

    @Test
    fun `should return an error if updated bank with specified account number does not exist`() {
        val updatedBank = Bank("not_found", 2.2, 17)

        mockMvc.patch("$baseUrl/${updatedBank.accountNumber}") {
            jsonRequestEntity(updatedBank)
        }.andExpect {
            status { isNotFound() }
            content {
                jsonResponseError("bank with account number ${updatedBank.accountNumber} not found")
            }
        }.andDo { print() }
    }

    @Test
    fun `should delete bank with given account number`() {
        val accountNumber = 1234

        mockMvc.delete("$baseUrl/$accountNumber")
            .andExpect {
                status { isNoContent() }
            }

        mockMvc.get("$baseUrl/$accountNumber")
            .andExpect {
                status { isNotFound() }
                content {
                    jsonResponseError("bank with account number $accountNumber not found")
                }
            }.andDo { print() }
    }

    @Test
    fun `should return an error if bank to be deleted with specified account number does not exist`() {
        val accountNumber = "not_exist"

        mockMvc.delete("$baseUrl/$accountNumber")
            .andExpect {
                status { isNotFound() }
                content {
                    jsonResponseError("bank with account number $accountNumber not found")
                }
            }.andDo { print() }
    }
}
