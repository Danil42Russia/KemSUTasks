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

ggplot(orders, aes(x = weekday)) +
  geom_histogram(bins = length(unique(weekday_names))) +
  geom_text(aes(label = after_stat(count)),
            stat = "count",
            vjust = -0.5) +
  scale_x_continuous(breaks = seq_along(weekday_names),
                     labels = weekday_names) +
  scale_y_continuous(breaks = seq(2000, 6500, 500),
                     limits = c(0, 6500)) +
  labs(title = "Гистограмма продаж (недели)",
       x = "День недели",
       y = "Продажи") +
  theme(plot.title = element_text(hjust = 0.5))
