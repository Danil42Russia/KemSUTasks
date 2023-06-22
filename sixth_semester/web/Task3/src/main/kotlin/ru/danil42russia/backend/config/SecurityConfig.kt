package ru.danil42russia.backend.config

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.http.HttpMethod
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.invoke
import org.springframework.security.config.http.SessionCreationPolicy
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.security.web.SecurityFilterChain
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter
import ru.danil42russia.backend.config.filter.ExceptionFilter
import ru.danil42russia.backend.config.filter.JwtFilter
import ru.danil42russia.backend.config.security.AuthenticationEntryPoint
import ru.danil42russia.backend.extension.routsPermitAll

@Configuration
class SecurityConfig(
    private val jwtFilter: JwtFilter,
    private val exceptionFilter: ExceptionFilter,
    private val entryPoint: AuthenticationEntryPoint,
) {
    private val excludeRoutes = listOf(
        Pair(HttpMethod.GET, "/api/auth/login"),
        Pair(HttpMethod.POST, "/api/auth/register"),
    )

    @Bean
    fun filterChain(http: HttpSecurity): SecurityFilterChain {
        http {
            cors { }
            csrf { disable() }
            httpBasic { disable() }
            sessionManagement { sessionCreationPolicy = SessionCreationPolicy.STATELESS }
            authorizeHttpRequests {
                routsPermitAll(excludeRoutes)
                authorize(anyRequest, authenticated)
            }
            addFilterBefore<UsernamePasswordAuthenticationFilter>(jwtFilter)
            addFilterBefore<JwtFilter>(exceptionFilter)
            exceptionHandling {
                authenticationEntryPoint = entryPoint
            }
        }
        return http.build()
    }

    @Bean
    fun passwordEncoder() = BCryptPasswordEncoder()
}
