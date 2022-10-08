package ru.danil42russia.recyclerview

import android.content.Context
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import android.widget.Toast
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import ru.danil42russia.recyclerview.model.ColorData

class MainActivity : AppCompatActivity(), CellClickListener {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val recyclerView = findViewById<RecyclerView>(R.id.rView)

        recyclerView.layoutManager = LinearLayoutManager(this)
        recyclerView.adapter = Adapter(this, ColorDao.COLORS, this)
    }

    class Adapter(
        private val context: Context,
        private val contacts: List<ColorData>,
        private val CellClickListener: CellClickListener
    ) : RecyclerView.Adapter<Adapter.ViewHolder>() {

        class ViewHolder(view: View) : RecyclerView.ViewHolder(view) {
            val colorName: TextView = view.findViewById(R.id.colorName)
            val colorHex: View = view.findViewById(R.id.colorHex)
        }

        override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
            val view = LayoutInflater.from(context).inflate(R.layout.rview_item, parent, false)
            return ViewHolder(view)
        }

        override fun onBindViewHolder(holder: ViewHolder, position: Int) {
            val colorData = contacts[position]

            holder.colorName.text = colorData.colorName
            holder.colorHex.setBackgroundColor(colorData.colorHex)

            holder.colorHex.setOnClickListener {
                CellClickListener.onCellClickListener(colorData.colorName)
            }
        }

        override fun getItemCount() = contacts.size
    }

    override fun onCellClickListener(colorName: String) {
        Toast.makeText(this, "IT’S $colorName", Toast.LENGTH_SHORT).show()
    }
}