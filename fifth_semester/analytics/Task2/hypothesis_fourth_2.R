library(dplyr)
library(ggplot2)

orders <- read.csv("https://gist.githubusercontent.com/Danil42Russia/07a725718af182d20e2862f6a16b612d/raw/9a4262d237c5cdc8607b8474490e3cbd62d532e5/ulabox_orders_with_categories_partials_2017.csv")
weekday_names <- c(
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье")

data <- orders |>
  dplyr::select(weekday, hour) |>
  dplyr::group_by(weekday, hour) |>
  dplyr::summarize(count_sales = dplyr::n(), .groups = "drop") |>
  dplyr::arrange(dplyr::desc(count_sales)) |>
  dplyr::top_n(5) |>
  dplyr::mutate(id = dplyr::row_number())

names <- paste(weekday_names[data$weekday], "в", data$hour, "часа")
maxis <- (round(max(data$count_sales) / 100, 1) * 100) + 50

ggplot(data = data, aes(y = count_sales, x = id)) +
  geom_bar(stat = "identity") +
  coord_flip() +
  scale_x_continuous(breaks = seq_along(names),
                     labels = names) +
  scale_y_continuous(limits = c(0, maxis)) +
  geom_text(aes(label = count_sales),
            hjust = -0.5) +
  labs(title = "ТОП-5 дней и часов по количеству продаж",
       x = NULL,
       y = NULL) +
  theme(plot.title = element_text(hjust = 0.5))
