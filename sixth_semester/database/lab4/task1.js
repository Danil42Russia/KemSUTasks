// 1. Для каждого сотрудника выведите фамилию, дату найма и дату пересмотра зарплаты, которая приходится на первый день после шести месяцев работы.
// Формат даты на выводе: «день.месяц.год», например 12.01.2012.
db.Emps.aggregate([
  {
    $project: {
      _id: 0,
      last_name: 1,
      start_date: {
        $dateToString: {
          format: "%d.%m.%Y",
          date: "$start_date",
        },
      },
      revision_date: {
        $dateToString: {
          format: "%d.%m.%Y",
          date: {
            $dateAdd: {
              startDate: "$start_date",
              unit: "month",
              amount: 3,
            },
          },
        },
      },
    },
  },
]);
