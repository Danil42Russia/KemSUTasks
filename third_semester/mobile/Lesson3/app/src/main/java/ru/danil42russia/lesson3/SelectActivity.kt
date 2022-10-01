package ru.danil42russia.lesson3

import android.app.Activity
import android.content.Intent
import android.os.Bundle
import android.widget.RadioButton
import android.widget.RadioGroup
import androidx.appcompat.app.AppCompatActivity

class SelectActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_select)

        val radioGroup = findViewById<RadioGroup>(R.id.select_radio)
        radioGroup.setOnCheckedChangeListener { _, checkedId ->
            val returnIntent = Intent()
            val radioTest = findViewById<RadioButton>(checkedId)

            returnIntent.putExtra(MainActivity.RESULT_TEXT, radioTest.text)

            setResult(Activity.RESULT_OK, returnIntent)
            finish()
        }
    }
}