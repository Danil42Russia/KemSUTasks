package ru.danil42russia.logging

import android.os.Bundle
import android.util.Log
import android.widget.Button
import android.widget.EditText
import androidx.appcompat.app.AppCompatActivity
import timber.log.Timber
import timber.log.Timber.Forest.plant

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        plant(Timber.DebugTree())

        val textEdit = findViewById<EditText>(R.id.edit_text)

        findViewById<Button>(R.id.button_log).setOnClickListener {
            Log.v("From EditText", textEdit.text.toString());
        }

        findViewById<Button>(R.id.button_timber).setOnClickListener {
            Timber.v(textEdit.text.toString())
        }
    }
}
