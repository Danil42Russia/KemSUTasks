package ru.danil42russia.lesson6

import android.os.Bundle
import android.widget.ImageView
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity

class DrinkActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_drink)

        val name = findViewById<TextView>(R.id.name)
        val description = findViewById<TextView>(R.id.description)
        val photo = findViewById<ImageView>(R.id.photo)

        val drinkId = intent.extras?.getInt(DrinkDao.EXTRA_DRINK_ID)
        val drink = DrinkDao.DRINKS[drinkId!!]

        name.text = drink.name
        description.text = drink.description

        photo.setImageResource(drink.imageResourceId)
        photo.contentDescription = drink.name
    }
}