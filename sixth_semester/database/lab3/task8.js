// 8. Вывести без повторения список навыков и для каждого количество сотрудников с данным навыком.
// Например: "Python 8, Django 2".
db.staff.aggregate([
  {
    $unwind: "$skills",
  },
  {
    $group: {
      _id: "$skills",
      "count_skills": { $count: {} },
    },
  },
  {
    $project: {
      _id: 0,
      "skill_name": "$_id",
      "count(skills)": "$count_skills",
    },
  },
]);
