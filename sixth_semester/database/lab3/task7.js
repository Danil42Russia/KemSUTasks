// 7. Вывести единый список навыков сотрудников с навыком Python, не включая Python.
db.staff.aggregate([
  {
    $match: { "skills": { $in: ["Python"] } },
  },
  {
    $unwind: "$skills",
  },
  {
    $match: { "skills": { $nin: ["Python"] } },
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
