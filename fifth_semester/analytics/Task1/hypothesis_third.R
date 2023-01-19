library(dplyr)

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
names <- paste0(fields_name, " (", percentages, "%)")
pie(grouped_categories,
    main = "Доля покупок товаров по категориям",
    labels = names)
