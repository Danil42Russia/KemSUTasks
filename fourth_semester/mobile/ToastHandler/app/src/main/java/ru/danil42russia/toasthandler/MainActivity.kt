package ru.danil42russia.toasthandler

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.Toast

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        findViewById<Button>(R.id.button_ok).setOnClickListener {
            Toast.makeText(applicationContext, R.string.toast_ok, Toast.LENGTH_SHORT).show()
        }
    }
}
