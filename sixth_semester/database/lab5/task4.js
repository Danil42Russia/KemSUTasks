// 4. Для всех заказчиков и всех их заказов выведите номер заказчика, его наименование и номер заказа.
// Даже если клиент не делал заказ, его номер и наименование должны быть включены в список.
db.Customers.aggregate([
  {
    $lookup: {
      from: "Ords",
      localField: "_id",
      foreignField: "customer._id",
      as: "ords",
    },
  },
  {
    $unwind: {
      path: "$ords",
      preserveNullAndEmptyArrays: true,
    },
  },
  {
    $project: {
      _id: 0,
      customer_id: "$_id",
      customer_name: "$name",
      ord_id: "$ords._id",
    },
  },
]);
