library(dplyr)

orders <- read.csv("~/ulabox_orders_with_categories_partials_2017.csv")

data <- orders |>
  dplyr::select(weekday, hour) |>
  dplyr::group_by(weekday, hour) |>
  dplyr::summarize(count_sales = dplyr::n(), .groups = "drop") |>
  dplyr::arrange(dplyr::desc(count_sales)) |>
  dplyr::top_n(5)

# Рачёт максимального значения по оси X. 50 дполнительное число, что-бы не липло к краям
maxix <- (round(max(data$count_sales) / 100, 1) * 100) + 50

weekday_names <- c(
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье")

# Рачёт имени столбца
names <- paste(weekday_names[data$weekday], "в", data$hour, "часа")

par(mar = c(4, 12, 2, 2))
b <- barplot(data$count_sales,
             main = "ТОП-5 дней и часов по количеству продаж",
             names.arg = names,
             horiz = TRUE,
             xlim = c(0, maxix),
             las = 1)

text(data$count_sales,
     b,
     labels = data$count_sales,
     adj = c(-0.5, 0))
