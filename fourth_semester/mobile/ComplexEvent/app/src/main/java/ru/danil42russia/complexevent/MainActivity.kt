package ru.danil42russia.complexevent

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.*

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val editText = findViewById<EditText>(R.id.edit_text)
        val viewText = findViewById<TextView>(R.id.text_view)
        val checkBox = findViewById<CheckBox>(R.id.check_box)
        val progressBar = findViewById<ProgressBar>(R.id.progress_bar)

        findViewById<Button>(R.id.button).setOnClickListener {
            if (checkBox.isChecked) {
                viewText.text = editText.text.toString()
                progressBar.incrementProgressBy(10)
            }
        }
    }
}
