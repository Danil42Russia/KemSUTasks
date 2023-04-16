// 1. Выведите фамилию, название отдела и название региона для всех сотрудников, получающих комиссионные.
db.Emps.aggregate([
  {
    $match: { commission_pct: { $ne: null } },
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
      last_name: 1,
      dept_name: "$dept.name",
      region_name: "$region.name",
    },
  },
]);
