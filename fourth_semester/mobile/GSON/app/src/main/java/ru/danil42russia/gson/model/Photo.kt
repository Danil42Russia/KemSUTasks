package ru.danil42russia.gson.model

import com.google.gson.annotations.SerializedName

data class Photo(
    val id: String,
    val owner: String,
    val secret: String,
    val server: String,
    val farm: Int,
    val title: String,

    @SerializedName("ispublic")
    val isPublic: Int,

    @SerializedName("isfriend")
    val isFriend: Int,

    @SerializedName("isfamily")
    val isFamily: Int,
) {
    fun getLink(): String {
        return "https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_z.jpg"
    }
}
