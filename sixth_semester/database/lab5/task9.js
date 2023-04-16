// 9. Для каждого вида товара, заказанного, по крайней мере, три раза, выведите название этого товара и количество заказов на него.
db.Ords.aggregate([
  {
    $unwind: "$products",
  },
  {
    $group: {
      _id: "$products.product.name",
      product_count: { $count: {} },
    },
  },
  {
    $match: { product_count: { $gte: 3 } },
  },
  {
    $project: {
      _id: 0,
      product_name: "$_id",
      times_ordered: "$product_count",
    },
  },
]);
