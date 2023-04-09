// 2. Выведите наибольшую и наименьшую зарплату.
db.staff.aggregate([
  {
    $group: {
      _id: null,
      min_salary: { $min: "$salary" },
      max_salary: { $max: "$salary" },
    },
  },
  {
    $project: {
      _id: 0,
      "max(salary)": "$min_salary",
      "min(salary)": "$min_salary",
    },
  },
]);
