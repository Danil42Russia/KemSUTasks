namespace Student;

static class Program
{
    private const int MaxCountStudents = 10;
    private static readonly List<Student> Students = new(MaxCountStudents);

    private static void Main()
    {
        while (true)
        {
            Console.Clear();
            Console.WriteLine("<== Меню ==>");
            Console.WriteLine("A. Добавить студента");
            Console.WriteLine("S. Показать студентов");
            Console.WriteLine("Q. Выход");

            var position = Console.ReadLine() ?? "";
            switch (position)
            {
                case "Q":
                    return;
                case "A":
                    AddStudent();
                    break;
                case "S":
                    ShowStudents();
                    break;
            }
        }
    }

    private static Student CreateStudent()
    {
        Console.Write("Введите фамилию и инициалы студента: ");
        var name = Console.ReadLine();
        if (string.IsNullOrEmpty(name))
            throw new ArgumentException("Имя студента не может быть пустым");

        Console.Write("Введите номер группы студента: ");
        var group = Console.ReadLine();
        if (string.IsNullOrEmpty(group))
            throw new ArgumentException("Номер группы не может быть пустым");

        Console.Write("Введите оценки студента (через зяпятую или пробел): ");
        var evaluation = Console.ReadLine();
        var evaluationArray = string.IsNullOrEmpty(evaluation)
            ? Array.Empty<string>()
            : evaluation.Trim().Split(',', ' ');

        var evaluations = Array.ConvertAll(evaluationArray, Convert.ToInt32);

        return new Student
        {
            Surname = name,
            GroupNumber = group,
            Evaluations = evaluations
        };
    }

    private static void AddStudent()
    {
        Console.Clear();
        Console.WriteLine("<== Добавить студента ==>");

        if (Students.Count == MaxCountStudents)
        {
            Console.WriteLine($"Израсходовано {MaxCountStudents} мест на добавалие студентов");
            Console.ReadLine();
            return;
        }

        try
        {
            var student = CreateStudent();
            Students.Add(student);

            Console.WriteLine($"Студент '{student.ToString()}' успешно добавлен!");
        }
        catch (Exception e)
        {
            Console.WriteLine($"Ошибка при создание студента: {e.Message}");
        }

        Console.ReadLine();
    }

    private static void ShowStudents()
    {
        Console.Clear();
        Console.WriteLine("<== Показать студентов ==>");

        var students = Students
            .Where(student => student.Average > 4.0)
            .ToList();

        if (students.Count == 0)
            Console.WriteLine("Студентов с средним баллом больше 4.0 не обнаружено!");

        foreach (var student in students)
            Console.WriteLine($"Студент '{student.ToString()}'");

        Console.ReadLine();
    }
}