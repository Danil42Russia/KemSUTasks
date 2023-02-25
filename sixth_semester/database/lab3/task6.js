// 6. Посчитать количество навыков всех сотрудников без повторений.
db.staff.aggregate([
  {
    $unwind: "$skills",
  },
  {
    $group: {
      _id: null,
      "unique_skills": { $addToSet: "$skills" },
    },
  },
  {
    $project: {
      _id: 0,
      "count(unique(skills))": { $size: "$unique_skills" },
    },
  },
]);
