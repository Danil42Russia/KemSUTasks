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
  dplyr::summarize(count_sales = dplyr::n(), .groups = "drop")

ggplot(data, aes(hour, weekday, fill = count_sales)) +
  geom_tile() +
  scale_fill_gradient(name = "Количество\nпродаж",
                      low = "yellow",
                      high = "red") +
  scale_x_continuous(breaks = data$hour) +
  scale_y_continuous(breaks = seq_along(weekday_names),
                     labels = weekday_names) +
  labs(x = "Часы",
       y = "День недели")
