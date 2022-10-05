package ru.danil42russia.internettest

import android.net.Uri
import android.os.Bundle
import android.util.Log
import android.widget.Button
import androidx.appcompat.app.AppCompatActivity
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import okhttp3.OkHttpClient
import okhttp3.Request
import java.io.BufferedReader
import java.net.HttpURLConnection
import java.net.URL

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        findViewById<Button>(R.id.btnHTTP).setOnClickListener {
            val urlConnection = url.openConnection() as HttpURLConnection

            GlobalScope.launch(Dispatchers.IO) {
                try {
                    val result = urlConnection
                        .inputStream
                        .bufferedReader()
                        .use(BufferedReader::readText)

                    Log.d("Flickr cats", result)
                } finally {
                    urlConnection.disconnect()
                }
            }
        }

        findViewById<Button>(R.id.btnOkHTTP).setOnClickListener {
            val client = OkHttpClient()
            val request = Request.Builder()
                .url(url)
                .build()

            GlobalScope.launch(Dispatchers.IO) {
                client.newCall(request).execute().use { response ->
                    if (response.isSuccessful) {
                        Log.i("Flickr OkCats", response.body!!.string())
                    }
                }
            }
        }
    }

    companion object {
        private val uri = Uri.Builder()
            .scheme("https")
            .authority("api.flickr.com")
            .appendPath("services")
            .appendPath("rest")
            .appendQueryParameter("method", "flickr.photos.search")
            .appendQueryParameter("api_key", "ff49fcd4d4a08aa6aafb6ea3de826464")
            .appendQueryParameter("tags", "cat")
            .appendQueryParameter("format", "json")
            .appendQueryParameter("nojsoncallback", "1")
            .build()
            .toString()

        private val url = URL(uri)
    }
}