// 9. Для каждого уровня определите возраст самого молодого сотрудника.
db.staff.aggregate([
  {
    $group: {
      _id: "$level",
      min_age: { $min: "$age" },
    },
  },
  {
    $project: {
      _id: 0,
      level: "$_id",
      "min(age)": "$min_age",
    },
  },
]);
