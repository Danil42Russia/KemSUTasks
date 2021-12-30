package ru.danil42russia.lesson6

import android.content.Intent
import android.os.Bundle
import android.widget.ArrayAdapter
import android.widget.ListView
import androidx.appcompat.app.AppCompatActivity

class DrinkCategoryActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_drink_category)

        val listAdapter = ArrayAdapter(
            this,
            android.R.layout.simple_list_item_1,
            DrinkDao.DRINKS
        )

        val listDrinks = findViewById<ListView>(R.id.list_drinks)

        listDrinks.adapter = listAdapter
        listDrinks.setOnItemClickListener { _, _, _, id ->
            val intent = Intent(this, DrinkActivity::class.java)
            intent.putExtra(DrinkDao.EXTRA_DRINK_ID, id.toInt())

            startActivity(intent)
        }
    }
}