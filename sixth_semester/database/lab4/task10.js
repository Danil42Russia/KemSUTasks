// 10. Выведите номер каждого клиента и количество сделанных им заказов.
db.Ords.aggregate([
  {
    $group: {
      _id: "$customer._id",
      count_ord: { $count: {} },
    },
  },
  {
    $project: {
      _id: 0,
      customer_id: "$_id",
      "count(ord_id)": "$count_ord",
    },
  },
]);
