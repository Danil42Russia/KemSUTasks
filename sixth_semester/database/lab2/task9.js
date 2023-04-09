// 9. Перевести всех студентов выше на один курс.
db.students.updateMany(
  {},
  { $inc: { course: 1 } },
);
