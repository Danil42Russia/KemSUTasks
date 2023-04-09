// 10. Придумать и выполнить собственное сложное задание на агрегацию с данной коллекцией.
// Вывести ТОП-5 навыков, отсортированного по среднему возрасту в данном навыке от большего к меньшему с
// уровнем Middle или Senior
db.staff.aggregate([
  {
    $match: { level: { $in: ["Middle", "Senior"] } },
  },
  {
    $unwind: "$skills",
  },
  {
    $group: {
      _id: "$skills",
      avg_age: { $avg: "$age" },
    },
  },
  {
    $sort: { avg_age: -1 },
  },
  {
    $limit: 5,
  },
  {
    $project: {
      _id: 0,
      "skill_name": "$_id",
      "avg(age)": "$avg_age",
    },
  },
]);
