library(dplyr)
library(tidyr)

orders <- read.csv("https://gist.githubusercontent.com/Danil42Russia/07a725718af182d20e2862f6a16b612d/raw/9a4262d237c5cdc8607b8474490e3cbd62d532e5/ulabox_orders_with_categories_partials_2017.csv")

data <- orders |>
  dplyr::select(weekday, hour) |>
  dplyr::group_by(weekday, hour) |>
  dplyr::summarize(count_sales = dplyr::n(), .groups = 'drop') |>
  tidyr::pivot_wider(names_from = hour, values_from = count_sales) |>
  dplyr::ungroup() |>
  dplyr::select(!weekday) |>
  as.matrix()

weekday_names <- c(
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье"
)
rownames(data) <- weekday_names

heatmap(data,
        Rowv = NA,
        Colv = NA,
        scale = 'none')
