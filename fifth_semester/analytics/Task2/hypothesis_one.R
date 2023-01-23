library(ggplot2)

orders <- read.csv("https://gist.githubusercontent.com/Danil42Russia/07a725718af182d20e2862f6a16b612d/raw/9a4262d237c5cdc8607b8474490e3cbd62d532e5/ulabox_orders_with_categories_partials_2017.csv")
hours <- orders$hour

ggplot(orders, aes(x = hour)) +
  geom_histogram(bins = length(unique(hours))) +
  geom_text(aes(label = after_stat(count)),
            stat = "count",
            vjust = -0.5) +
  scale_x_continuous(breaks = seq(min(hours), max(hours))) +
  scale_y_continuous(breaks = seq(0, 2700, 300),
                     limits = c(0, 2700)) +
  labs(title = "Гистограмма продаж (часы)",
       x = "Часы",
       y = "Продажи") +
  theme(plot.title = element_text(hjust = 0.5))
