orders <- read.csv("https://gist.githubusercontent.com/Danil42Russia/07a725718af182d20e2862f6a16b612d/raw/9a4262d237c5cdc8607b8474490e3cbd62d532e5/ulabox_orders_with_categories_partials_2017.csv")

weekdays <- orders$weekday
weekday_names <- c(
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье")

bins <- seq(min(weekdays), max(weekdays), l = length(unique(weekdays)) + 1)

# Цена деления для
division_y <- 500
# максимальное для осеи Y на графике, чтобы не липло
max_value_y <- division_y * 13

h <- hist(weekdays,
          breaks = bins,
          main = "Гистограмма продаж (недели)",
          xlab = "День недели",
          ylab = "Продажи",
          ylim = c(0, max_value_y),
          xaxt = "n",
          yaxt = "n")

axis(1,
     at = h$mids,
     labels = weekday_names)

axis(2,
     at = seq(2000, max_value_y, division_y),
     las = 1)

text(h$mids,
     h$counts,
     labels = h$counts,
     adj = c(0.5, -0.5))
