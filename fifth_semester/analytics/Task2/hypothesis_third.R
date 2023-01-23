library(dplyr)
library(ggplot2)

orders <- read.csv("https://gist.githubusercontent.com/Danil42Russia/07a725718af182d20e2862f6a16b612d/raw/9a4262d237c5cdc8607b8474490e3cbd62d532e5/ulabox_orders_with_categories_partials_2017.csv")
fields <- c(
  "Food.",
  "Fresh.",
  "Drinks.",
  "Home.",
  "Beauty.",
  "Health.",
  "Baby.",
  "Pets.")

grouped_categories <- orders |>
  dplyr::select(dplyr::all_of(fields)) |>
  dplyr::summarise(dplyr::across(dplyr::everything(), list(sum = sum))) |>
  as.matrix()|>
  as.vector()

fields_name <- c(
  "Продукты",
  "Свежие продукты",
  "Напитки",
  "Товары для дома",
  "Красота",
  "Лекарства",
  "Ребенок",
  "Домашние животные")

percentages <- round(grouped_categories / sum(grouped_categories) * 100, 2)

data <- data.frame("category" = fields_name,
                   "amount" = grouped_categories,
                   "percentages" = percentages)

ggplot(data, aes(x = "", y = amount, fill = category)) +
  geom_bar(stat = "identity", width = 1) +
  coord_polar("y", start = 0) +
  geom_text(aes(label = paste0(percentages, "%")),
            position = position_stack(vjust = 0.5)) +
  labs(title = "Доля покупок товаров по категориям",
       x = NULL,
       y = NULL) +
  scale_fill_discrete(name = "Категории") +
  theme(plot.title = element_text(hjust = 0.5),
        axis.line = element_blank(),
        axis.ticks = element_blank(),
        axis.text = element_blank())
