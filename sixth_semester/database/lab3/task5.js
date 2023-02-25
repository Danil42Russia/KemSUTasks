// 5. Вывести единый список навыков сотрудников (без повторения) в возрасте от 20 до 30 лет.
db.staff.aggregate([
  {
    $match: { "age": { $in: [20, 30] } },
  },
  {
    $unwind: "$skills",
  },
  {
    $group: {
      _id: null,
      "skills": { $addToSet: "$skills" },
    },
  },
  {
    $project: { _id: 0 },
  },
]);
