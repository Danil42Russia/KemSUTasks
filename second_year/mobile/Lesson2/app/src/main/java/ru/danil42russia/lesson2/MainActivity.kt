package ru.danil42russia.lesson2

import android.graphics.Color
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.ArrayAdapter
import android.widget.Button
import android.widget.Spinner
import android.widget.TextView

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val spinner = findViewById<Spinner>(R.id.beer_option)
        val findButton = findViewById<Button>(R.id.find_beer)
        val text = findViewById<TextView>(R.id.beer_names)

        val beerList = mapOf(
            "светлое" to listOf("Heineken", "Жигулевское", "Клинское"),
            "тёмное" to listOf("Guinness", "Velkopopovicky kozel", "Cernovar"),
            "полутёмное" to listOf("Царская забава", "Башня", "Боброфф"),
        )

        spinner.adapter = ArrayAdapter(
            this,
            R.layout.spinner_item,
            beerList.keys.toList()
        )

        findButton.setOnClickListener {
            val beerType = spinner.selectedItem.toString()
            val beerNames = beerList[beerType]

            text.text = beerNames!!.joinToString("\n")
        }
    }


    fun onClickAttention(v: View) {
        val text = findViewById<TextView>(R.id.beer_names)

        text.text = resources.getText(R.string.attention_text)
    }
}