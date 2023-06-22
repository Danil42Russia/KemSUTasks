package ru.danil42russia.backend.exception

class UnauthenticatedException(message: String = "not authenticated") : RuntimeException(message)
