package ru.danil42russia.backend.service

import io.jsonwebtoken.Jwts
import io.jsonwebtoken.SignatureAlgorithm
import io.jsonwebtoken.io.Decoders
import io.jsonwebtoken.security.Keys
import org.springframework.stereotype.Service
import ru.danil42russia.backend.exception.AuthenticationException
import ru.danil42russia.backend.model.User
import java.security.Key
import java.util.*

@Service
class JwtService {
    private val accessTokenExpireTime = 24 * 60 * 60 * 1000 // 1 day
    private val secretKey = "SuperPuperSecretKeySuperPuperSecretKeySuperPuperSecretKey"

    fun generateToken(user: User): String {
        val currentTimeMillis = System.currentTimeMillis()

        return Jwts.builder().apply {
            setSubject(user.username)
            setIssuedAt(Date(currentTimeMillis))
            setExpiration(Date(currentTimeMillis + accessTokenExpireTime))
            signWith(getSignKey(), SignatureAlgorithm.HS256)
        }.compact()
    }

    fun getUsername(token: String): String {
        val jwtParser = Jwts.parserBuilder().apply {
            setSigningKey(getSignKey())
        }.build()

        val body = try {
            jwtParser.parseClaimsJws(token).body
        } catch (ex: Exception) {
            throw AuthenticationException()
        }

        return body.subject
    }

    private fun getSignKey(): Key {
        val keyBytes = Decoders.BASE64.decode(secretKey)
        return Keys.hmacShaKeyFor(keyBytes)
    }
}
