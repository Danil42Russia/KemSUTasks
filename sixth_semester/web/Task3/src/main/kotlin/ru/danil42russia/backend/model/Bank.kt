package ru.danil42russia.backend.model

data class Bank(
    val accountNumber: String,
    val trust: Double,
    val transactionFee: Int,
)
