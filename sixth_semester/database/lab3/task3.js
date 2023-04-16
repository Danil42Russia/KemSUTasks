// 3. Вывести уровень и среднюю зарплату сотрудников с данным уровнем в порядке возрастания.
db.staff.aggregate([
  {
    $group: {
      _id: "$level",
      avg_salary: { $avg: "$salary" },
    },
  },
  {
    $sort: { avg_salary: 1 },
  },
  {
    $project: {
      _id: 0,
      level: "$_id",
      "avg(salary)": "$avg_salary",
    },
  },
]);
