// 2. Выведете имя пользователя и дату начала работы всех сотрудников, нанятых между 14 мая 1990 года и 26 мая 1991 года.
// Результаты запроса отсортируйте по убыванию дат начала работы.
db.Emps.aggregate([
  {
    $match: {
      start_date: {
        $gt: new Date("1990-05-15"),
        $lt: new Date("1991-05-27"),
      },
    },
  },
  {
    $sort: { start_date: -1 },
  },
  {
    $project: {
      _id: 0,
      first_name: 1,
      start_date: {
        $dateToString: {
          format: "%d.%m.%Y",
          date: "$start_date",
        },
      },
    },
  },
]);
