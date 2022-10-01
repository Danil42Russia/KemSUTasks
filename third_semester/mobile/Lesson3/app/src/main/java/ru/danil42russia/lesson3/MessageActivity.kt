package ru.danil42russia.lesson3

import android.os.Bundle
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity

class MessageActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_message)

        val textMessage = findViewById<TextView>(R.id.message_text)
        textMessage.text = intent.extras?.getString(MainActivity.SEND_MESSAGE)
    }
}