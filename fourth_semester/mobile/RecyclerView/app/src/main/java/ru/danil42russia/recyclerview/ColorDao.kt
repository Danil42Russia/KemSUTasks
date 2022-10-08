package ru.danil42russia.recyclerview

import android.graphics.Color
import ru.danil42russia.recyclerview.model.ColorData

object ColorDao {
    val COLORS = listOf(
        ColorData("BLACK", Color.BLACK),
        ColorData("DKGRAY", Color.DKGRAY),
        ColorData("GRAY", Color.GRAY),
        ColorData("LTGRAY", Color.LTGRAY),
        ColorData("WHITE", Color.WHITE),
        ColorData("RED", Color.RED),
        ColorData("GREEN", Color.GREEN),
        ColorData("BLUE", Color.BLUE),
        ColorData("YELLOW", Color.YELLOW),
        ColorData("CYAN", Color.CYAN),
        ColorData("MAGENTA", Color.MAGENTA),
        ColorData("TRANSPARENT", Color.TRANSPARENT),
    )
}
