// 10. Удалить студента с заданным именем и фамилией.
db.students.deleteOne(
  { first_name: "Илья", last_name: "Морозов" },
);
