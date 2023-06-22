package ru.danil42russia.backend.exception

import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.RestControllerAdvice
import ru.danil42russia.backend.extension.logger

@RestControllerAdvice
class ControllerAdvice {
    private val logger = logger<ControllerAdvice>()

    @ExceptionHandler(EntityNotFoundException::class)
    fun handleNotFount(ex: Exception) =
        sendError(ex.message ?: "not found", HttpStatus.NOT_FOUND)

    @ExceptionHandler(EntityAlreadyExistsException::class)
    fun handleBadRequest(ex: Exception) =
        sendError(ex.message ?: "bad request", HttpStatus.BAD_REQUEST)

    @ExceptionHandler(
        value = [
            AuthenticationException::class,
            UnauthenticatedException::class,
        ]
    )
    fun handleForbidden(ex: Exception) =
        sendError(ex.message ?: "forbidden", HttpStatus.FORBIDDEN)

    @ExceptionHandler(Exception::class)
    fun handleInternalServer(ex: Exception): ResponseEntity<Any> {
        logger.error("unprocessed error", ex)
        return sendError("internal server error", HttpStatus.INTERNAL_SERVER_ERROR)
    }

    private fun sendError(message: String, status: HttpStatus): ResponseEntity<Any> {
        val error = mapOf("message" to message)
        return ResponseEntity(error, status)
    }
}
