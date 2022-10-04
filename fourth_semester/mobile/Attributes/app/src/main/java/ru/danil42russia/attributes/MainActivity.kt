package ru.danil42russia.attributes

import android.graphics.Color
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.TypedValue
import android.widget.Button
import android.widget.EditText

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val textField = findViewById<EditText>(R.id.text_field)

        findViewById<Button>(R.id.black_color_btn).setOnClickListener {
            textField.setTextColor(Color.BLACK)
        }

        findViewById<Button>(R.id.red_color_btn).setOnClickListener {
            textField.setTextColor(Color.RED)
        }

        findViewById<Button>(R.id.size_8_btn).setOnClickListener {
            textField.setTextSize(TypedValue.COMPLEX_UNIT_SP, 8F)
        }

        findViewById<Button>(R.id.size_24_btn).setOnClickListener {
            textField.setTextSize(TypedValue.COMPLEX_UNIT_SP, 24F)
        }

        findViewById<Button>(R.id.white_background_btn).setOnClickListener {
            textField.setBackgroundColor(Color.WHITE)
        }

        findViewById<Button>(R.id.yellow_background_btn).setOnClickListener {
            textField.setBackgroundColor(Color.YELLOW)
        }
    }
}