namespace DateInterval;

static class Program
{
    private static void Main()
    {
        var leftInterval = new DateInterval();
        var rightInterval = new DateInterval();

        while (true)
        {
            Console.Title = $"DateInterval (Menu): {leftInterval} / {rightInterval}";

            Console.Clear();
            Console.WriteLine("(T) Выполнить операции над интервалом даты");
            Console.WriteLine($"(A) Левый интервал даты ({leftInterval})");
            Console.WriteLine($"(B) Правый интервал даты ({rightInterval})");
            Console.WriteLine("(Q) Выход");

            Console.Write("Введите команду: ");
            var position = Console.ReadLine()?.ToUpper();
            switch (position)
            {
                case "Q":
                    return;
                case "T":
                    PerformDate(leftInterval, rightInterval);
                    break;
                case "A":
                    ModifyDate(ref leftInterval);
                    break;
                case "B":
                    ModifyDate(ref rightInterval);
                    break;
            }
        }
    }

    private static void PerformDate(DateInterval leftInterval, DateInterval rightInterval)
    {
        Console.Clear();

        Console.WriteLine($"A + B = {leftInterval + rightInterval}");
        Console.WriteLine($"A - B = {leftInterval - rightInterval}");
        Console.WriteLine($"(A = B) = {leftInterval == rightInterval}");
        Console.WriteLine($"(!A, !B) = ({!leftInterval}, {!rightInterval})");
        Console.WriteLine($"((long)A, (long)B) = ({(long)leftInterval}, {(long)rightInterval})");
        Console.WriteLine($"((double)A, (double)B) = ({(double)leftInterval}, {(double)rightInterval})");

        Console.ReadLine();
    }

    /// <summary>
    /// Получение даты с ввода
    /// </summary>
    /// <exception cref="ArgumentException"></exception>
    private static DateInterval ReadDate()
    {
        Console.Write("Введите время в формате HH-DDD-YY: ");
        var timeString = Console.ReadLine() ?? "";

        var timeData = timeString.Split("-");
        if (timeData.Length != 3)
            throw new ArgumentException("Введенная строка не подходит по формату");

        var timeDataArray = string.IsNullOrEmpty(timeString)
            ? Array.Empty<string>()
            : timeData;

        var timeArray = Array.ConvertAll(timeDataArray, Convert.ToInt32);

        return new DateInterval(timeArray[0], timeArray[1], timeArray[2]);
    }

    /// <summary>
    /// Бесопастное получение даты
    /// </summary>
    private static DateInterval? TryReadDate()
    {
        Console.Clear();
        try
        {
            return ReadDate();
        }
        catch (ArgumentException e)
        {
            Console.WriteLine($"Ошибка при получение даты: {e.ParamName}");
            Console.ReadLine();
            return null;
        }
        catch (Exception e)
        {
            Console.WriteLine($"Неизвестная ошибка при получение даты: {e.Message}");
            Console.ReadLine();
            return null;
        }
    }

    /// <summary>
    /// Бесопастное получение скаляра
    /// </summary>
    private static int TryReadValue()
    {
        Console.Clear();
        Console.Write("Введите скаляр: ");
        var timeString = Console.ReadLine() ?? "";

        if (!int.TryParse(timeString, out var value))
        {
            Console.WriteLine("Ошибка при получение скаляра");
            Console.ReadLine();
            return 1;
        }

        return value;
    }

    private static void ModifyDate(ref DateInterval interval)
    {
        while (true)
        {
            Console.Title = $"DateInterval (Modify): {interval}";
            
            Console.Clear();
            Console.WriteLine($"Текущий интервал: {interval}");
            Console.WriteLine("(=) Задать интервал");
            Console.WriteLine("(-) Вычесть интервал");
            Console.WriteLine("(+) Прибавить интервал");
            Console.WriteLine("(*) Умножить на скаляр");
            Console.WriteLine("(~) Дополнение до конца столетия");
            Console.WriteLine("(0) Выход");

            Console.Write("Введите команду: ");
            var position = Console.ReadLine()?.ToUpper();
            switch (position)
            {
                case "0":
                    return;
                case "=":
                    interval = TryReadDate() ?? interval;
                    break;
                case "-":
                    interval -= TryReadDate() ?? new DateInterval();
                    break;
                case "+":
                    interval += TryReadDate() ?? new DateInterval();
                    break;
                case "*":
                    interval *= TryReadValue();
                    break;
                case "~":
                    interval = ~interval;
                    break;
            }
        }
    }
}