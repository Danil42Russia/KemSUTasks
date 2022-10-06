package ru.danil42russia.gson.model

import com.google.gson.annotations.SerializedName

data class PhotoPage(
    val page: Int,
    val pages: Int,

    @SerializedName("perpage")
    val perPage: Int,
    val total: Int,
    val photo: List<Photo>,
)
