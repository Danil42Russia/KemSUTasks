package ru.danil42russia.backend.config.filter

import jakarta.servlet.FilterChain
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.stereotype.Component
import org.springframework.web.filter.OncePerRequestFilter
import ru.danil42russia.backend.config.security.UserDetailsService
import ru.danil42russia.backend.service.JwtService

@Component
class JwtFilter(
    private val jwtService: JwtService,
    private val userDetailsService: UserDetailsService,
) : OncePerRequestFilter() {
    private val headerName = "Authorization"
    private val tokenPrefixName = "Bearer "

    override fun doFilterInternal(
        request: HttpServletRequest,
        response: HttpServletResponse,
        filterChain: FilterChain,
    ) {
        SecurityContextHolder.clearContext()

        getTokenFromRequest(request)?.let {
            SecurityContextHolder.getContext().authentication = getAuthentication(it)
        }

        filterChain.doFilter(request, response)
    }

    private fun getAuthentication(token: String): UsernamePasswordAuthenticationToken {
        val username = jwtService.getUsername(token)
        val userDetails = userDetailsService.loadUserByUsername(username)
        return UsernamePasswordAuthenticationToken(userDetails, null, userDetails.authorities)
    }

    private fun getTokenFromRequest(request: HttpServletRequest): String? {
        val bearer = request.getHeader(headerName) ?: return null

        if (!bearer.startsWith(tokenPrefixName)) {
            return null
        }

        return bearer.substring(tokenPrefixName.length)
    }
}
