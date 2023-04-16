// 3. Выведите наименование товара, номера товара и заказанное количество по всем позициям заказов, оформленных в указанную дату.
db.Ords.aggregate([
  {
    $unwind: "$products",
  },
  {
    $match: { date_ordered: { $eq: new Date("1992-08-31") } },
  },
  {
    $project: {
      _id: 0,
      product_id: "$products.product._id",
      product_name: "$products.product.name",
      items_quantity: "$products.product.name",
    },
  },
]);
