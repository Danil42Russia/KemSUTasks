// 9. Получите список номеров всех регионов с указанием количества отделов в каждом регионе.
db.Depts.aggregate([
  {
    $group: {
      _id: "$region",
      count_region: { $count: {} },
    },
  },
  {
    $project: {
      _id: 0,
      region_id: "$_id",
      "count(region_id)": "$count_region",
    },
  },
]);
