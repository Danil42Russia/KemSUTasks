package ru.danil42russia.nestedlayouts

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.TextView

class MainActivity : AppCompatActivity() {
    private val groupsNames = listOf("horizontal", "vertical", "constraint")
    private val elementsNames = listOf("first", "second", "third")

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        var value = 1

        val startedIndex = (value - 1) % 3
        showValueById(startedIndex, value.toString())

        findViewById<Button>(R.id.button_roll).setOnClickListener {
            value++

            val thisIndex = (value - 1) % 3
            val oldIndex = (value + 1) % 3

            showValueById(oldIndex, "")
            showValueById(thisIndex, value.toString())
        }
    }

    private fun showValueById(index: Int, value: String) {
        groupsNames.forEach { groupName ->
            val identifierName = groupName + "_" + elementsNames[index]

            val res = resources.getIdentifier(identifierName, "id", this.packageName)
            val textView = findViewById<TextView>(res)
            textView.text = value
        }
    }
}
