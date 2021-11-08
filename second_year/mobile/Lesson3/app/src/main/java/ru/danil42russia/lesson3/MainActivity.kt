package ru.danil42russia.lesson3

import android.app.Activity
import android.content.Intent
import android.os.Bundle
import android.widget.Button
import androidx.activity.result.contract.ActivityResultContracts
import androidx.appcompat.app.AppCompatActivity
import com.google.android.material.textfield.TextInputLayout

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val textMessage = findViewById<TextInputLayout>(R.id.main_message)
        val sendMessage = findViewById<Button>(R.id.main_send)
        val sendMessageVia = findViewById<Button>(R.id.main_send_via)
        val selectMessage = findViewById<Button>(R.id.main_select)

        sendMessage.setOnClickListener {
            val messageActivity = Intent(it.context, MessageActivity::class.java).also { intent ->
                val text = textMessage.editText?.text.toString()

                intent.putExtra("message", text)
            }

            startActivity(messageActivity)
        }

        sendMessageVia.setOnClickListener {
            val intent = Intent(Intent.ACTION_SEND).also { intent ->
                val text = textMessage.editText?.text.toString()

                intent.type = "text/html"
                intent.putExtra(Intent.EXTRA_TEXT, text)
            }

            startActivity(intent)
        }

        val resultLauncher =
            registerForActivityResult(ActivityResultContracts.StartActivityForResult()) { result ->
                if (result.resultCode == Activity.RESULT_OK) {
                    val data = result.data

                    textMessage.editText?.setText(data?.getStringExtra("text"))
                }
            }

        selectMessage.setOnClickListener {
            val selectActivity = Intent(it.context, SelectActivity::class.java)

            resultLauncher.launch(selectActivity)
        }
    }
}