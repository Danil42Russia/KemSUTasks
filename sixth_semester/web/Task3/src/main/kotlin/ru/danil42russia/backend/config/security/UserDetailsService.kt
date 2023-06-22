package ru.danil42russia.backend.config.security

import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.stereotype.Service
import ru.danil42russia.backend.exception.AuthenticationException
import ru.danil42russia.backend.extension.logger
import ru.danil42russia.backend.repository.UserRepository

@Service
class UserDetailsService(private val userRepository: UserRepository) : UserDetailsService {
    private val logger = logger<UserDetailsService>()

    override fun loadUserByUsername(username: String): UserDetails {
        val user = userRepository.findByUsername(username)
        if (user == null) {
            logger.error("possible key leakage")
            throw AuthenticationException()
        }

        return UserDetails(user)
    }
}
