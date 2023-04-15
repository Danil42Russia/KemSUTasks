// 6. Выведите номер каждого заказа и количество позиций в нем.
db.Ords.aggregate([
  {
    $project: {
      _id: 0,
      "ord_id": "$_id",
      "count(products)": { $size: "$products" },
    },
  },
]);
