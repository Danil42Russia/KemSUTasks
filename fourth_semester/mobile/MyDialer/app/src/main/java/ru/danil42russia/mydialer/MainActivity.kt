package ru.danil42russia.mydialer

import android.content.Context
import android.net.Uri
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.isVisible
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.google.gson.Gson
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import ru.danil42russia.mydialer.model.Contact
import timber.log.Timber
import java.io.BufferedReader
import java.net.HttpURLConnection
import java.net.URL

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        Timber.plant(Timber.DebugTree())

        val recyclerView = findViewById<RecyclerView>(R.id.rView)
        val search = findViewById<EditText>(R.id.et_search)

        CoroutineScope(Dispatchers.IO).launch {
            val contacts = getContacts()

            runOnUiThread {
                recyclerView.layoutManager = LinearLayoutManager(this@MainActivity)
                recyclerView.adapter = Adapter(this@MainActivity, contacts)
            }

            findViewById<Button>(R.id.btn_search).setOnClickListener {
                val searchText = search.text.toString()
                val searchContacts = if (searchText.isBlank()) {
                    contacts
                } else {
                    contacts.filter { it.contains(searchText) }
                }

                recyclerView.adapter = Adapter(this@MainActivity, searchContacts)
            }
        }
    }

    class Adapter(private val context: Context, private val contacts: List<Contact>) :
        RecyclerView.Adapter<Adapter.ViewHolder>() {

        class ViewHolder(view: View) : RecyclerView.ViewHolder(view) {
            val name: TextView = view.findViewById(R.id.textName)
            val phone: TextView = view.findViewById(R.id.textPhone)
            val type: TextView = view.findViewById(R.id.textType)
        }

        override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
            val view = LayoutInflater.from(context).inflate(R.layout.rview_item, parent, false)
            return ViewHolder(view)
        }

        override fun onBindViewHolder(holder: ViewHolder, position: Int) {
            val contact = contacts[position]

            holder.name.textIfNotBlank(contact.name)
            holder.phone.textIfNotBlank(contact.phone)
            holder.type.textIfNotBlank(contact.type)
        }

        override fun getItemCount() = contacts.size

        private fun TextView.textIfNotBlank(text: String) {
            this.text = text
            if (text.isBlank()) {
                this.isVisible = false
            }
        }
    }

    private fun getContacts(): List<Contact> {
        val contacts: List<Contact>

        val urlConnection = url.openConnection() as HttpURLConnection
        try {
            val result = urlConnection
                .inputStream
                .bufferedReader()
                .use(BufferedReader::readText)

            contacts = Gson().fromJson(result, Array<Contact>::class.java).toList()
        } finally {
            urlConnection.disconnect()
        }

        return contacts
    }

    companion object {
        private val uri = Uri.Builder()
            .scheme("https")
            .authority("drive.google.com")
            .appendPath("u")
            .appendPath("0")
            .appendPath("uc")
            .appendQueryParameter("id", "1-KO-9GA3NzSgIc1dkAsNm8Dqw0fuPxcR")
            .build()
            .toString()

        private val url = URL(uri)
    }
}