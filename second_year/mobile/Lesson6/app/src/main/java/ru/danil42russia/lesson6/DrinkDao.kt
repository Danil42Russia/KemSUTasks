package ru.danil42russia.lesson6

import ru.danil42russia.lesson6.model.Drink

class DrinkDao {
    companion object {
        const val EXTRA_DRINK_ID = "drinkId"

        val DRINKS = listOf(
            Drink(
                "Latte",
                "A couple of espresso shots with steamed milk",
                R.drawable.latte,
            ),
            Drink(
                "Cappuccino",
                "Espresso, hot milk, and a steamed milk foam",
                R.drawable.cappuccino,
            ),
            Drink(
                "Filter",
                "Highest quality beans roasted and brewed fresh",
                R.drawable.filter,
            )
        )
    }
}