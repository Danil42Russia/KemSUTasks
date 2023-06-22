package ru.danil42russia.backend.datasource

import ru.danil42russia.backend.model.Bank

interface BankDataSource {
    fun retrieveBanks(): Collection<Bank>

    fun retrieveBank(accountNumber: String): Bank

    fun createBank(bank: Bank): Bank

    fun updateBank(accountNumber: String, bank: Bank): Bank

    fun deleteBank(accountNumber: String)
}
