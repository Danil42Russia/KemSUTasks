package ru.danil42russia.backend.dto.converter

import ru.danil42russia.backend.dto.RegisterRequest
import ru.danil42russia.backend.model.User

fun RegisterRequest.toEntry(): User {
    return User(
        name = name,
        username = username,
        password = password,
    )
}
