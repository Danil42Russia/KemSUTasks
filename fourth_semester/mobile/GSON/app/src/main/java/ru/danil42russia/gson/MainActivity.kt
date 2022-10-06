package ru.danil42russia.gson

import android.content.ClipData
import android.content.ClipboardManager
import android.content.Context
import android.graphics.BitmapFactory
import android.net.Uri
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.GridLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.google.gson.Gson
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import ru.danil42russia.gson.model.Photo
import ru.danil42russia.gson.model.Wrapper
import timber.log.Timber
import timber.log.Timber.Forest.plant
import java.io.BufferedReader
import java.net.HttpURLConnection
import java.net.URL

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        plant(Timber.DebugTree())

        val recyclerView = findViewById<RecyclerView>(R.id.rView)

        CoroutineScope(Dispatchers.IO).launch {
            val imagesLinks = getPhotos().map { it.getLink() }

            runOnUiThread {
                recyclerView.layoutManager = GridLayoutManager(this@MainActivity, 2)
                recyclerView.adapter = Adapter(this@MainActivity, imagesLinks)
            }
        }
    }

    private fun getPhotos(): List<Photo> {
        val photos: List<Photo>

        val urlConnection = url.openConnection() as HttpURLConnection
        try {
            val result = urlConnection
                .inputStream
                .bufferedReader()
                .use(BufferedReader::readText)

            val wrapper = Gson().fromJson(result, Wrapper::class.java)

            photos = wrapper.photos.photo
        } finally {
            urlConnection.disconnect()
        }

        photos.forEachIndexed { index, photo ->
            if (index % 5 == 0) {
                Timber.d(photo.toString())
            }
        }

        return photos
    }

    class Adapter(private val context: Context, private val imagesLinks: List<String>) :
        RecyclerView.Adapter<Adapter.ViewHolder>() {

        class ViewHolder(view: View) : RecyclerView.ViewHolder(view) {
            val image: ImageView = view.findViewById(R.id.imageView)
        }

        override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
            val view = LayoutInflater.from(context).inflate(R.layout.rview_item, parent, false)
            return ViewHolder(view)
        }

        override fun onBindViewHolder(holder: ViewHolder, position: Int) {
            CoroutineScope(Dispatchers.Main).launch {
                val imageLink = imagesLinks[position]
                val bitmap = withContext(Dispatchers.IO) {
                    BitmapFactory.decodeStream(URL(imageLink).openStream())
                }

                holder.image.setImageBitmap(bitmap)
                holder.itemView.setOnClickListener {
                    val clipboardManager =
                        context.getSystemService(CLIPBOARD_SERVICE) as ClipboardManager
                    val clipBoard = ClipData.newPlainText("Link", imageLink)
                    clipboardManager.setPrimaryClip(clipBoard)

                    Timber.i(imageLink)
                }
            }
        }

        override fun getItemCount() = imagesLinks.size
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
