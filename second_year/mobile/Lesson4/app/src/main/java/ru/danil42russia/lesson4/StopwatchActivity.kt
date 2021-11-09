package ru.danil42russia.lesson4

import android.os.Bundle
import android.os.Handler
import android.os.Looper
import android.view.View
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import java.util.*

class StopwatchActivity : AppCompatActivity() {
    private var allSeconds = 0
    private var isRunning = false


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_stopwatch)

        if (savedInstanceState != null) {
            allSeconds = savedInstanceState.getInt(ALL_SECOND)
            isRunning = savedInstanceState.getBoolean(IS_RUNNING)
        }

        runTimer()
    }

    override fun onSaveInstanceState(outState: Bundle) {
        outState.putInt(ALL_SECOND, allSeconds)
        outState.putBoolean(IS_RUNNING, isRunning)

        super.onSaveInstanceState(outState)
    }


    fun onClickStart(v: View) {
        isRunning = true
    }

    fun onClickStop(v: View) {
        isRunning = false
    }

    fun onClickReset(v: View) {
        isRunning = false
        allSeconds = 0
    }

    private fun getTime(): String {
        val hours = allSeconds / 3600
        val minutes = (allSeconds % 3600) / 60
        val secs = allSeconds % 60

        return String.format(Locale.getDefault(), "%d:%02d:%02d", hours, minutes, secs)
    }


    private fun runTimer() {
        val timeView: TextView = findViewById(R.id.time_view)

        val handler = Handler(Looper.getMainLooper())
        handler.run {
            post(object : Runnable {
                override fun run() {

                    timeView.text = getTime()

                    if (isRunning) {
                        allSeconds++
                    }
                    handler.postDelayed(this, 1000)
                }
            })
        }
    }

    companion object {
        private const val ALL_SECOND = "all_seconds"
        private const val IS_RUNNING = "is_running"
    }
}
