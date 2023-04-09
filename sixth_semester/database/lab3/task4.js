// 4. Вывести количество сотрудников, получающих зарплату выше 7000.
db.staff.aggregate([
  {
    $match: { salary: { $gt: 7000 } },
  },
  {
    $group: {
      _id: null,
      count_salary: { $count: {} },
    },
  },
  {
    $project: {
      _id: 0,
      "count(salary)": "$count_salary",
    },
  },
]);
