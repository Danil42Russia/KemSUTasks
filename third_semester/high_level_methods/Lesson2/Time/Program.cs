namespace Time;

static class Program
{
    private static Time _time = new();

    private static void Main()
    {
        while (true)
        {
            Console.Title = $"Time: {_time}";

            Console.Clear();
            Console.WriteLine("<== Меню ==>");
            Console.WriteLine($"Записанное время {_time}");
            Console.WriteLine();

            Console.WriteLine("S. Задать секунды");
            Console.WriteLine("M. Задать минуты");
            Console.WriteLine("H. Задать часы");
            Console.WriteLine("T. Задать время");
            Console.WriteLine("Q. Выход");

            var position = Console.ReadLine();
            switch (position)
            {
                case "Q":
                    return;
                case "S":
                    SetSecond();
                    break;
                case "M":
                    SetMinute();
                    break;
                case "H":
                    SetHour();
                    break;
                case "T":
                    SetTime();
                    break;
            }
        }
    }

    private static void SetSecond()
    {
        Console.Clear();
        Console.WriteLine("<== Задать секунды ==>");
        Console.WriteLine($"Записанные секунды: {_time.Second:D2}");

        Console.Write("Введите секунды (от 0 до 59): ");
        try
        {
            var second = int.Parse(Console.ReadLine() ?? "");
            _time.Second = second;
        }
        catch (Exception e)
        {
            Console.WriteLine($"Ошибка при задавание секунд: {e.Message}");
        }

        Console.ReadLine();
    }

    private static void SetMinute()
    {
        Console.Clear();
        Console.WriteLine("<== Задать минуты ==>");
        Console.WriteLine($"Записанные минуты (от 0 до 59): {_time.Minute:D2}");

        Console.Write("Введите минуты: ");
        try
        {
            var minute = int.Parse(Console.ReadLine() ?? "");
            _time.Minute = minute;
        }
        catch (Exception e)
        {
            Console.WriteLine($"Ошибка при задавание минут: {e.Message}");
        }

        Console.ReadLine();
    }

    private static void SetHour()
    {
        Console.Clear();
        Console.WriteLine("<== Задать часы ==>");
        Console.WriteLine($"Записанные часы (от 0 до 23): {_time.Hour:D2}");

        Console.Write("Введите часы: ");
        try
        {
            var hour = int.Parse(Console.ReadLine() ?? "");
            _time.Hour = hour;
        }
        catch (Exception e)
        {
            Console.WriteLine($"Ошибка при задавание часов: {e.Message}");
        }

        Console.ReadLine();
    }

    private static Time ParseTime()
    {
        Console.Write("Введите время в формате ЧЧ:ММ:СС: ");
        var timeString = Console.ReadLine() ?? "";

        var timeData = timeString.Split(":");
        if (timeData.Length != 3)
            throw new ArgumentException("Введенная строка не подходит по формату");

        var timeDataArray = string.IsNullOrEmpty(timeString)
            ? Array.Empty<string>()
            : timeData;

        var timeArray = Array.ConvertAll(timeDataArray, Convert.ToInt32);

        return new Time(timeArray[0], timeArray[1], timeArray[2]);
    }

    private static void SetTime()
    {
        Console.Clear();
        Console.WriteLine("<== Задать время ==>");
        Console.WriteLine($"Записанное время {_time}");

        try
        {
            _time = ParseTime();
        }
        catch (Exception e)
        {
            Console.WriteLine($"Ошибка при задавание часов: {e.Message}");
        }

        Console.ReadLine();
    }
}