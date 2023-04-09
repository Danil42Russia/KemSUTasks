// 1. Выведите ФИО и номер группы студентов, изучающих заданный язык и заданную дисциплину.
db.students.find(
  {
    list_foreign_languages: "Немецкий",
    "list_learned_disciplines.discipline_name": "Программная инженерия",
  },
  {
    _id: 0,
    first_name: 1,
    last_name: 1,
    patronymic: 1,
    group: 1,
  },
);
