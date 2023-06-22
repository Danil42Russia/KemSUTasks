package ru.danil42russia.backend.service

import org.springframework.stereotype.Service
import ru.danil42russia.backend.datasource.BankDataSource
import ru.danil42russia.backend.model.Bank

@Service
class BankService(private val dataSource: BankDataSource) {
    fun getBanks() = dataSource.retrieveBanks()

    fun getBank(accountNumber: String) = dataSource.retrieveBank(accountNumber)

    fun addBank(bank: Bank) = dataSource.createBank(bank)

    fun updateBank(accountNumber: String, bank: Bank) = dataSource.updateBank(accountNumber, bank)

    fun deleteBank(accountNumber: String) = dataSource.deleteBank(accountNumber)
}
