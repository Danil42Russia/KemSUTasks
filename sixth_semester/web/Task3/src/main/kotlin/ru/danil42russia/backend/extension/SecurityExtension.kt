package ru.danil42russia.backend.extension

import org.springframework.http.HttpMethod
import org.springframework.security.config.annotation.web.AuthorizeHttpRequestsDsl

fun AuthorizeHttpRequestsDsl.routsPermitAll(routes: List<Pair<HttpMethod, String>>) {
    routes.map {
        authorize(it.first, it.second, permitAll)
    }
}
