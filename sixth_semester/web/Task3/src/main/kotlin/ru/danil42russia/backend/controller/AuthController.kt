package ru.danil42russia.backend.controller

import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*
import ru.danil42russia.backend.dto.LoginRequest
import ru.danil42russia.backend.dto.RegisterRequest
import ru.danil42russia.backend.service.AuthService

@RestController
@RequestMapping("/api/auth")
class AuthController(private val authService: AuthService) {

    @GetMapping("/login")
    fun login(@RequestBody loginRequest: LoginRequest) = authService.authenticate(loginRequest)

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    fun register(@RequestBody registerRequest: RegisterRequest) = authService.register(registerRequest)
}
