// 8. Добавить в коллекцию информацию еще о двух новых студентах используя функцию insertMany.
// Коллекция должна содержать: фамилию, имя, отчество, возраст, год поступления,
//                             курс, группу, список увлечений,
//                             список изучаемых иностранных языков.
db.students.insertMany([
  {
    last_name: "Семенова",
    first_name: "Кристина",
    patronymic: "Максимовна",
    age: 22,
    admission_year: 2018,
    course: 4,
    group: 182,
    list_hobby: [
      "Чтение",
      "Туризм",
    ],
    list_foreign_languages: [
      "Китайский",
      "Французский"
    ],
  },
  {
    last_name: "Зыкова",
    first_name: "Асия",
    patronymic: "Данииловна",
    age: 19,
    admission_year: 2021,
    course: 1,
    group: 211,
    list_hobby: [
      "Чтение",
      "Туризм",
    ],
    list_foreign_languages: [
      "Французский",
      "Английский"
    ],
  },
]);
