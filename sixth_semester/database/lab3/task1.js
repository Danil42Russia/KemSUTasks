// 1. Вывести средний возраст сотрудников с уровнем Middle.
db.staff.aggregate([
  {
    $match: { "level": { $eq: "Middle" } },
  },
  {
    $group: {
      _id: null,
      "avg_age": { $avg: "$age" },
    },
  },
  {
    $project: {
      _id: 0,
      "avg(age)": "$avg_age",
    },
  },
]);
