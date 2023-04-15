// 8. Для каждого вида товара, заказанного, по крайней мере, три раза, выведите номер этого товара и количество заказов на него.
// Отсортируйте данные по номерам заказанных товаров.
db.Ords.aggregate([
  {
    $unwind: "$products",
  },
  {
    $group: {
      _id: "$products.product._id",
      "product_count": { $count: {} },
    },
  },
  {
    $match: { "product_count": { $gte: 3 } },
  },
  {
    $project: {
      _id: 0,
      product_id: "$_id",
      "count(product_id)": "$product_count",
    },
  },
]);
