package ru.danil42russia.backend.service

import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Service
import ru.danil42russia.backend.dto.LoginRequest
import ru.danil42russia.backend.dto.RegisterRequest
import ru.danil42russia.backend.dto.RegisterResponse
import ru.danil42russia.backend.dto.TokenResponse
import ru.danil42russia.backend.dto.converter.toEntry
import ru.danil42russia.backend.exception.EntityAlreadyExistsException
import ru.danil42russia.backend.exception.EntityNotFoundException
import ru.danil42russia.backend.repository.UserRepository

@Service
class AuthService(
    private val userRepository: UserRepository,
    private val passwordEncoder: PasswordEncoder,
    private val jwtService: JwtService,
) {
    fun register(registerRequest: RegisterRequest): RegisterResponse {
        if (userRepository.existsUserByUsername(registerRequest.username)) {
            throw EntityAlreadyExistsException("user with username ${registerRequest.username} already exist")
        }

        val user = registerRequest.toEntry().apply {
            password = passwordEncoder.encode(password)
        }.let {
            userRepository.save(it)
        }

        return RegisterResponse(
            user.name,
            user.username,
        )
    }

    fun authenticate(loginRequest: LoginRequest): TokenResponse {
        val user = userRepository.findByUsername(loginRequest.username)
            ?: throw EntityNotFoundException("user with username or password not found")

        if (!passwordEncoder.matches(loginRequest.password, user.password)) {
            throw EntityNotFoundException("user with username or password not found")
        }

        return TokenResponse(
            accessToken = jwtService.generateToken(user)
        )
    }
}
