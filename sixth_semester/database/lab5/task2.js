// 2. Выведите номер и название фирмы, название региона для заказчиков с кредитным рейтингом "EXCELLENT".
db.Emps.aggregate([
  {
    $unwind: "$customers",
  },
  {
    $match: { "customers.creditRating": "EXCELLENT" },
  },
  {
    $lookup: {
      from: "Regions",
      localField: "dept.region",
      foreignField: "_id",
      as: "region",
    },
  },
  {
    $unwind: "$region",
  },
  {
    $project: {
      _id: 0,
      customer_id: "$customers._id",
      customer_name: "$customers.name",
      region_name: "$region.name",
    },
  },
]);
