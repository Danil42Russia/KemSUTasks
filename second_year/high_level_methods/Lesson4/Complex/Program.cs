namespace Complex;

static class Program
{
    private static void Main()
    {
        while (true)
        {
            Console.Title = "Complex";

            Console.Clear();
            Console.WriteLine("<== Меню ==>");
            Console.WriteLine("S. Сложить числа");
            Console.WriteLine("M. Умножить числа");
            Console.WriteLine("E. Проверить на равенства");
            Console.WriteLine("Q. Выход");

            var position = Console.ReadLine();
            switch (position)
            {
                case "Q":
                    return;
                case "S":
                    SumNumber();
                    break;
                case "M":
                    MultiplicationNumber();
                    break;
                case "E":
                    EqualsNumber();
                    break;
            }
        }
    }

    private static ComplexNumber ReadNumber()
    {
        var timeString = Console.ReadLine() ?? "";

        return new ComplexNumber(timeString);
    }

    private static Tuple<ComplexNumber, ComplexNumber> ReadNumbers()
    {
        Console.WriteLine(
            "Вводимое число должно состоять из двух частей: действительной и мнимой части, разделенной i");
        Console.WriteLine("Например: 33i12, -7i100, +5i-21");
        Console.WriteLine();

        Console.Write("Введите первое число: ");
        var firstNumber = ReadNumber();

        Console.Write("Введите второе число: ");
        var secondNumber = ReadNumber();

        return new(firstNumber, secondNumber);
    }

    private static void SumNumber()
    {
        Console.Clear();
        Console.WriteLine("<== Сложение чисел ==>");

        var (firstNumber, secondNumber) = ReadNumbers();
        Console.WriteLine();

        var cn = firstNumber + secondNumber;
        Console.WriteLine($"При сложение '{firstNumber}' и '{secondNumber}' получилось '{cn}'");

        Console.Title = $"Complex: {firstNumber} + {secondNumber} = {cn}";

        Console.ReadLine();
    }

    private static void MultiplicationNumber()
    {
        Console.Clear();
        Console.WriteLine("<== Умножение чисел ==>");

        var (firstNumber, secondNumber) = ReadNumbers();
        Console.WriteLine();

        var cn = firstNumber * secondNumber;
        Console.WriteLine($"При умножение '{firstNumber}' и '{secondNumber}' получилось '{cn}'");

        Console.Title = $"Complex: {firstNumber} * {secondNumber} = {cn}";

        Console.ReadLine();
    }

    private static void EqualsNumber()
    {
        Console.Clear();
        Console.WriteLine("<== Проверка на равенства ==>");

        var (firstNumber, secondNumber) = ReadNumbers();
        Console.WriteLine();

        var isEq = firstNumber.Equals(secondNumber);

        var message = isEq ? "равны" : "не равны";
        Console.WriteLine($"'Числа {firstNumber}' и '{secondNumber}' '{message}' друг другу");

        var consoleMessage = isEq ? "==" : "!=";
        Console.Title = $"Complex: {firstNumber} {consoleMessage} {secondNumber}";

        Console.ReadLine();
    }
}