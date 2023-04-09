import json
import random


def generate_info() -> dict:
    # Максимальное количество изучаемых языков и количество увлечений
    max_languages, max_hobbies = 2, 2
    # Список доступных языков для изучения
    languages = ["Английский", "Китайский", "Французский", "Немецкий"]
    # Список направлений для обучения
    study_directions = [
        "Прикладная математика и информатика",
        "Прикладная информатика",
        "Компьютерная безопасность",
    ]
    # Список увлечений
    hobby = [
        "Программирование",
        "Футбол",
        "Игра на гитаре",
        "Чтение",
        "Туризм",
    ]
    # Список изученных дисциплин
    disciplines = [
        "Математическая теория рисков",
        "Менеджмент",
        "Разработка мобильных приложений",
        "Программная инженерия",
        "Компьютерные сети",
        "Базы данных",
        "Геоинформационные системы",
        "Управление разработкой программного обеспечения",
        "Основы машинного обучения и даталогии",
    ]
    # Информация о курсе: {курс: (год рождения, год поступления)}
    courses = {
        1: ([2002, 2003], 2021),
        2: ([2001, 2002], 2020),
        3: ([2000, 2001], 2019),
        4: ([1999, 2000], 2018),
    }

    [course_number, course_data] = random.choice(list(courses.items()))
    birth_year, admission_year = random.choice(course_data[0]), course_data[1]

    list_learned_disciplines = random.sample(disciplines, random.randrange(4, len(disciplines) + 1))
    list_learned_disciplines = [
        {
            "discipline_name": item,
            "semester": random.randrange(1, (course_number * 2) + 1),
            "mark": random.randrange(3, 6),
        }
        for item in list_learned_disciplines
    ]
    group = "{admission_year}{group_number}".format(
        admission_year=str(admission_year)[-2:],
        group_number=random.randrange(1, 3),
    )

    return {
        "last_name": "",
        "first_name": "",
        "patronymic": "",
        "birth_year": birth_year,
        "age": (admission_year + course_number - 1) - birth_year,
        "admission_year": admission_year,
        "course": course_number,
        "study_direction": random.choice(study_directions),
        "group": int(group),
        "list_hobby": random.sample(hobby, random.randrange(1, max_hobbies + 1)),
        "list_foreign_languages": random.sample(languages, random.randrange(max_languages + 1)),
        "list_learned_disciplines": list_learned_disciplines,
    }


def format_dict(dict_value: dict, schema: list[str]) -> dict:
    assert len([item for item in schema if schema.count(item) > 1]) == 0, "найдены дубли в ключах"
    return {key_name: dict_value[key_name] for key_name in schema}


def generate_info_from_schema(schema: list[str]) -> dict:
    info = generate_info()
    return format_dict(info, schema)


def print_from_schema(schema: list[str], count: int = 1):
    if count == 1:
        info = generate_info_from_schema(schema)
    else:
        info = [generate_info_from_schema(schema) for _ in range(count)]

    print(json.dumps(info, indent=2, ensure_ascii=False))


def main():
    task7 = [
        "last_name",
        "first_name",
        "patronymic",
        "birth_year",
        "course",
        "study_direction",
        "group",
        "list_foreign_languages",
    ]
    task8 = [
        "last_name",
        "first_name",
        "patronymic",
        "age",
        "admission_year",
        "course",
        "group",
        "list_hobby",
        "list_foreign_languages",
    ]
    task9 = [
        "last_name",
        "first_name",
        "patronymic",
        "birth_year",
        "course",
        "study_direction",
        "group",
        "list_foreign_languages",
        "list_learned_disciplines",
    ]

    print("task7")
    print_from_schema(task7, 1)
    print_from_schema(task7, 1)

    print("task8")
    print_from_schema(task8, 2)

    print("task9")
    print_from_schema(task9, 4)


if __name__ == "__main__":
    main()
