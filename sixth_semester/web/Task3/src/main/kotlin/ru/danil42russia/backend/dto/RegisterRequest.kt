package ru.danil42russia.backend.dto

data class RegisterRequest(
    val name: String,
    val username: String,
    val password: String,
)
