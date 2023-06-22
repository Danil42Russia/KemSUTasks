package ru.danil42russia.backend.config.security

import org.springframework.security.core.userdetails.UserDetails
import ru.danil42russia.backend.model.User

class UserDetails(private val user: User) : UserDetails {
    override fun getAuthorities() = null

    override fun getPassword() = user.password

    override fun getUsername() = user.username

    override fun isAccountNonExpired() = true

    override fun isAccountNonLocked() = true

    override fun isCredentialsNonExpired() = true

    override fun isEnabled() = true
}
