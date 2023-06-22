package ru.danil42russia.backend.controller

import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*
import ru.danil42russia.backend.model.Bank
import ru.danil42russia.backend.service.BankService

@RestController
@RequestMapping("/api/banks")
class BankController(private val bankService: BankService) {

    @GetMapping
    fun getBanks() = bankService.getBanks()

    @GetMapping("/{accountNumber}")
    fun getBank(@PathVariable accountNumber: String) = bankService.getBank(accountNumber)

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    fun addBank(@RequestBody bank: Bank) = bankService.addBank(bank)

    @PatchMapping("/{accountNumber}")
    fun updateBank(@PathVariable accountNumber: String, @RequestBody bank: Bank) =
        bankService.updateBank(accountNumber, bank)

    @DeleteMapping("/{accountNumber}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    fun deleteBank(@PathVariable accountNumber: String) = bankService.deleteBank(accountNumber)
}
