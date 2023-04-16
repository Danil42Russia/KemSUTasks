// 5. Выведите фамилии и номера всех сотрудников вместе с фамилиями и номерами их менеджеров.
db.Emps.aggregate([
  {
    $lookup: {
      from: "Emps",
      localField: "manager",
      foreignField: "_id",
      as: "manager",
    },
  },
  {
    $unwind: "$manager",
  },
  {
    $project: {
      _id: 0,
      employer_id: "$_id",
      employer_name: "$last_name",
      manager_id: "$manager._id",
      manager_name: "$manager.last_name",
    },
  },
]);
