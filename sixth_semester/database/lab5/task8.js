// 8. Выведите наименование каждого клиента и количество сделанных им заказов.
db.Ords.aggregate([
  {
    $group: {
      _id: "$customer.name",
      count_ord: { $count: {} },
    },
  },
  {
    $project: {
      _id: 0,
      customer_name: "$_id",
      "count(ord_id)": "$count_ord",
    },
  },
]);
