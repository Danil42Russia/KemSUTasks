orders <- read.csv("https://gist.githubusercontent.com/Danil42Russia/07a725718af182d20e2862f6a16b612d/raw/9a4262d237c5cdc8607b8474490e3cbd62d532e5/ulabox_orders_with_categories_partials_2017.csv")

hours <- orders$hour

# Бины для постороения гистограммы
# Значения берутся от минимального до максимального
# Количество значений, это количество уникальных значений + 1
# P.S. Я так и не смог разобраться, почему без '+1' график не, тот, который задумывался, но скорее всего это из-за "Pretty Breakpoints"
bins <- seq(min(hours), max(hours), l = length(unique(hours)) + 1)

# Цена деления для
division_y <- 300
# максимальное для осеи Y на графике, чтобы не липло
max_value_y <- division_y * 9

h <- hist(hours,
          breaks = bins,
          main = "Гистограмма продаж (часы)",
          xlab = "Часы",
          ylab = "Продажи",
          ylim = c(0, max_value_y),
          xaxt = "n",
          yaxt = "n")

axis(1,
     at = h$mids,
     labels = seq(min(hours), max(hours), 1))

axis(2,
     at = seq(0, max_value_y, division_y),
     las = 1)

text(h$mids,
     h$counts,
     labels = h$counts,
     adj = c(0.5, -0.5))
