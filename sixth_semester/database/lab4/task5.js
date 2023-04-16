// 5. Выведите минимальную и максимальную заработные платы по всем должностям в алфавитном порядке.
db.Emps.aggregate([
  {
    $group: {
      _id: "$title",
      min_salary: { $min: "$salary" },
      max_salary: { $max: "$salary" },
    },
  },
  {
    $sort: { _id: 1 },
  },
  {
    $project: {
      _id: 0,
      title: "$_id",
      "max(salary)": "$min_salary",
      "min(salary)": "$min_salary",
    },
  },
]);
