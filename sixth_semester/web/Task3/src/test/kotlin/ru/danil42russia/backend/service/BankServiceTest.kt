package ru.danil42russia.backend.service

import io.mockk.mockk
import io.mockk.verify
import org.junit.jupiter.api.Test
import ru.danil42russia.backend.datasource.BankDataSource

internal class BankServiceTest {
    private val dataSource = mockk<BankDataSource>(relaxed = true)
    private val bankService = BankService(dataSource)

    @Test
    fun `should call it's data source to retrieve banks`() {
        bankService.getBanks()

        verify(exactly = 1) { dataSource.retrieveBanks() }
    }
}
