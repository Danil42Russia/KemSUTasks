// 6. Для каждого заказчика, общая сумма всех заказов которых превышает 100000,
// выведите наименование заказчика, заказанные им товары, их количество.
db.Ords.aggregate([
  {
    $unwind: "$products",
  },
  {
    $group: {
      _id: "$customer.name",
      total_sales: { $sum: "$total" },
      products: { $push: "$products" },
    },
  },
  {
    $match: { total_sales: { $gte: 100000 } },
  },
  {
    $unwind: "$products",
  },
  {
    $group: {
      _id: {
        customer_name: "$_id",
        product_name: "$products.product.name",
      },
      total_quantity: { $sum: "$products.quantity" },
    },
  },
  {
    $project: {
      _id: 0,
      customer_name: "$_id.customer_name",
      product_name: "$_id.product_name",
      product_quantity: "$total_quantity",
    },
  },
]);
