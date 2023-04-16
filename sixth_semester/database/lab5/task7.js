// 7. Получите список номеров и названий всех регионов с указанием количества отделов в каждом регионе.
db.Depts.aggregate([
  {
    $group: {
      _id: "$region",
      region_count: { $count: {} },
    },
  },
  {
    $lookup: {
      from: "Regions",
      localField: "_id",
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
      region_id: "$_id",
      region_name: "$region.name",
      "count(dept_id)": "$region_count",
    },
  },
]);
