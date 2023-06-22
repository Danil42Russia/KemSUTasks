package ru.danil42russia.backend.datasource.mock

import org.springframework.stereotype.Repository
import ru.danil42russia.backend.datasource.BankDataSource
import ru.danil42russia.backend.exception.EntityAlreadyExistsException
import ru.danil42russia.backend.exception.EntityNotFoundException
import ru.danil42russia.backend.model.Bank

@Repository
class MockBankDataSource : BankDataSource {
    private val banks = mutableListOf(
        Bank("1234", 2.72, 13),
        Bank("2345", 3.14, 0),
        Bank("3456", 0.0, 100),
    )

    override fun retrieveBanks() = banks

    override fun retrieveBank(accountNumber: String): Bank {
        return banks.firstOrNull { it.accountNumber == accountNumber }
            ?: throw EntityNotFoundException("bank with account number $accountNumber not found")
    }

    override fun createBank(bank: Bank): Bank {
        if (banks.any { it.accountNumber == bank.accountNumber }) {
            throw EntityAlreadyExistsException("bank with account number ${bank.accountNumber} already exist")
        }

        banks.add(bank)

        return bank
    }

    override fun updateBank(accountNumber: String, bank: Bank): Bank {
        val oldBank = banks.firstOrNull { it.accountNumber == accountNumber }
            ?: throw EntityNotFoundException("bank with account number ${bank.accountNumber} not found")

        banks.remove(oldBank)
        banks.add(bank)

        return bank
    }

    override fun deleteBank(accountNumber: String) {
        val oldBank = banks.firstOrNull { it.accountNumber == accountNumber }
            ?: throw EntityNotFoundException("bank with account number $accountNumber not found")

        banks.remove(oldBank)
    }
}
