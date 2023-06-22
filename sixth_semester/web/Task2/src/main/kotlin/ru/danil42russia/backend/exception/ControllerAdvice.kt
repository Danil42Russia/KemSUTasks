package ru.danil42russia.backend.exception

import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.RestControllerAdvice

@RestControllerAdvice
class ControllerAdvice {

    @ExceptionHandler(EntityNotFoundException::class)
    fun handleNotFount(ex: Exception) =
        sendError(ex.message ?: "not found", HttpStatus.NOT_FOUND)

    @ExceptionHandler(EntityAlreadyExistsException::class)
    fun handleBadRequest(ex: Exception) =
        sendError(ex.message ?: "bad request", HttpStatus.BAD_REQUEST)


    private fun sendError(message: String, status: HttpStatus): ResponseEntity<Any> {
        val error = mapOf("message" to message)
        return ResponseEntity(error, status)
    }
}
