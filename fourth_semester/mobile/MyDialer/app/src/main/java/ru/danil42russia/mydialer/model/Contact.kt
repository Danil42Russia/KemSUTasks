package ru.danil42russia.mydialer.model

data class Contact(
    val name: String,
    val phone: String,
    val type: String,
) {
    fun contains(text: String): Boolean {
        return name.contains(text) || phone.contains(text) || type.contains(text)
    }
}
