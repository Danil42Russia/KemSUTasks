package ru.danil42russia.lesson6

import ru.danil42russia.lesson6.model.Drink

class DrinkDao {
    companion object {
        const val EXTRA_DRINK_ID = "drinkId"

        val DRINKS = listOf(
            Drink(
                "Латте",
                "Пара порций эспрессо с парным молоком",
                R.drawable.latte,
            ),
            Drink(
                "Капучино",
                "Эспрессо, горячее молоко и молочная пена на пару",
                R.drawable.cappuccino,
            ),
            Drink(
                "Фильтр-кофе",
                "Бобы высочайшего качества, обжаренные и сваренные в свежем виде",
                R.drawable.filter,
            )
        )
    }
}