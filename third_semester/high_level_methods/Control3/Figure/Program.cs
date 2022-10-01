namespace Figure;

static class Program
{
    static RegularHexagon _regularHexagon = new();

    private static void Main()
    {
        while (true)
        {
            Console.Title = "RegularHexagon";

            Console.Clear();
            Console.WriteLine("(P) Вывести свойства фигуры");
            Console.WriteLine($"(X) Изменить X-координату ({_regularHexagon.Median.X})");
            Console.WriteLine($"(Y) Изменить Y-координату ({_regularHexagon.Median.Y})");
            Console.WriteLine($"(S) Изменить длину стороны ({_regularHexagon.SideLength})");
            Console.WriteLine("(Q) Выход");

            Console.Write("Введите команду: ");
            var position = Console.ReadLine()?.ToUpper();
            switch (position)
            {
                case "Q":
                    return;
                case "X":
                    EditFigure(x: ReadValue());
                    break;
                case "Y":
                    EditFigure(y: ReadValue());
                    break;
                case "S":
                    EditFigure(sideLength: ReadValue());
                    break;
                case "P":
                    ShapeProperties();
                    break;
            }
        }
    }

    private static double? ReadValue()
    {
        Console.Clear();
        Console.Write("Введите значение: ");
        var timeString = Console.ReadLine() ?? "";

        if (!double.TryParse(timeString, out var value))
        {
            Console.WriteLine("Ошибка при получение значения");
            Console.ReadLine();
            return null;
        }

        return value;
    }

    private static void EditFigure(double? sideLength = null, double? x = null, double? y = null)
    {
        var newSideLength = sideLength ?? _regularHexagon.SideLength;
        var newMedian = new Point(
            x ?? _regularHexagon.Median.X,
            y ?? _regularHexagon.Median.Y
        );

        _regularHexagon = new RegularHexagon(newSideLength, newMedian);
    }

    private static void ShapeProperties()
    {
        Console.Clear();
        
        Console.WriteLine("Свойства фигуры:");
        Console.WriteLine($"Центр = {_regularHexagon.Median}");
        Console.WriteLine($"Длина стороны = {_regularHexagon.SideLength}");
        Console.WriteLine($"Радиус описанной окружности = {_regularHexagon.RadiusСircumcircle}");
        Console.WriteLine($"Радиус вписанной окружности = {_regularHexagon.RadiusIncircle}");
        Console.WriteLine($"Площадь = {_regularHexagon.Area}");
        Console.WriteLine($"Периметр = {_regularHexagon.Perimeter}");
        Console.WriteLine($"Область = ({_regularHexagon.GetClipBox.Min}; {_regularHexagon.GetClipBox.Max})");
        Console.WriteLine($"Размер = [{_regularHexagon.GetClipBox.Height}; {_regularHexagon.GetClipBox.Width}]");

        Console.ReadLine();
    }
}