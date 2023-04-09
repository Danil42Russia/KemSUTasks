// 9. Создать файл *.js для добавления в БД информации еще о четырёх новых студентах.
// Коллекция должна содержать: фамилию, имя, отчество, год рождения, курс, направление обучения,
//                             группу, список изучаемых иностранных языков,
//                             список изученных дисциплин (название, семестр, оценка).
// При этом список изученных дисциплин должен представлять собой список объектов.
// Выполнить содержимое файла используя функцию load.
db.students.insertMany([
  {
    last_name: "Винокуров",
    first_name: "Иван",
    patronymic: "Александрович",
    birth_year: 2001,
    course: 3,
    study_direction: "Прикладная математика и информатика",
    group: 191,
    list_foreign_languages: [
      "Немецкий"
    ],
    list_learned_disciplines: [
      {
        discipline_name: "Менеджмент",
        semester: 4,
        mark: 5,
      },
      {
        discipline_name: "Основы машинного обучения и даталогии",
        semester: 4,
        mark: 4,
      },
      {
        discipline_name: "Геоинформационные системы",
        semester: 3,
        mark: 5,
      },
      {
        discipline_name: "Разработка мобильных приложений",
        semester: 5,
        mark: 3,
      },
    ],
  },
  {
    last_name: "Русанов",
    first_name: "Максим",
    patronymic: "Макарович",
    birth_year: 1999,
    course: 4,
    study_direction: "Компьютерная безопасность",
    group: 182,
    list_foreign_languages: [
      "Французский"
    ],
    list_learned_disciplines: [
      {
        discipline_name: "Основы машинного обучения и даталогии",
        semester: 5,
        mark: 5,
      },
      {
        discipline_name: "Управление разработкой программного обеспечения",
        semester: 7,
        mark: 4,
      },
      {
        discipline_name: "Базы данных",
        semester: 1,
        mark: 3,
      },
      {
        discipline_name: "Менеджмент",
        semester: 4,
        mark: 4,
      },
      {
        discipline_name: "Геоинформационные системы",
        semester: 7,
        mark: 5,
      },
      {
        discipline_name: "Компьютерные сети",
        semester: 3,
        mark: 4,
      },
    ],
  },
  {
    last_name: "Никитин",
    first_name: "Илья",
    patronymic: "Михайлович",
    birth_year: 2001,
    course: 2,
    study_direction: "Прикладная математика и информатика",
    group: 201,
    list_foreign_languages: [
      "Китайский",
      "Немецкий"
    ],
    list_learned_disciplines: [
      {
        discipline_name: "Программная инженерия",
        semester: 3,
        mark: 4,
      },
      {
        discipline_name: "Управление разработкой программного обеспечения",
        semester: 2,
        mark: 5,
      },
      {
        discipline_name: "Основы машинного обучения и даталогии",
        semester: 1,
        mark: 5,
      },
      {
        discipline_name: "Разработка мобильных приложений",
        semester: 2,
        mark: 3,
      },
      {
        discipline_name: "Математическая теория рисков",
        semester: 3,
        mark: 4,
      },
      {
        discipline_name: "Геоинформационные системы",
        semester: 1,
        mark: 4,
      },
    ],
  },
  {
    last_name: "Морозов",
    first_name: "Илья",
    patronymic: "Эмильевич",
    birth_year: 1999,
    course: 4,
    study_direction: "Прикладная математика и информатика",
    group: 181,
    list_foreign_languages: [
      "Французский",
      "Немецкий"
    ],
    list_learned_disciplines: [
      {
        discipline_name: "Разработка мобильных приложений",
        semester: 3,
        mark: 4,
      },
      {
        discipline_name: "Компьютерные сети",
        semester: 1,
        mark: 5,
      },
      {
        discipline_name: "Программная инженерия",
        semester: 8,
        mark: 3,
      },
      {
        discipline_name: "Управление разработкой программного обеспечения",
        semester: 4,
        mark: 4,
      },
      {
        discipline_name: "Базы данных",
        semester: 8,
        mark: 5,
      },
      {
        discipline_name: "Геоинформационные системы",
        semester: 5,
        mark: 4,
      },
    ],
  },
]);
