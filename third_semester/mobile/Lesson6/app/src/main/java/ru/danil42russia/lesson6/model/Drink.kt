package ru.danil42russia.lesson6.model

data class Drink(
    val name: String,
    val description: String,
    val imageResourceId: Int,
) {
    override fun toString(): String {
        return name
    }
}