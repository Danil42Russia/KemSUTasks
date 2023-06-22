package ru.danil42russia.backend.repository

import org.springframework.data.jpa.repository.JpaRepository
import ru.danil42russia.backend.model.User

interface UserRepository : JpaRepository<User, Int> {
    fun findByUsername(username: String): User?

    fun existsUserByUsername(username: String): Boolean
}
