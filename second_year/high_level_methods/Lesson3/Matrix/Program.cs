namespace Matrix;

static class Program
{
    private static void Main()
    {
        Console.Title = "Matrix";

        while (true)
        {
            Console.Clear();
            Console.WriteLine("<== Меню ==>");
            Console.WriteLine();

            Console.WriteLine("Sum. Сложить матрицы"); // MatrixSum
            Console.WriteLine("Sub. Вычитание матриц"); // MatrixSubtract
            Console.WriteLine("E. Проверить матрицы на равенства"); // MatrixEqual
            Console.WriteLine("I. Вычислить обратную матрицу"); // MatrixInverse
            Console.WriteLine("T. Транспонирование матрицу"); // MatrixTranspose
            Console.WriteLine("Q. Выход");

            var position = Console.ReadLine();
            switch (position)
            {
                case "Q":
                    return;
                case "Sum":
                    MatrixSum();
                    break;
                case "Sub":
                    MatrixSubtract();
                    break;
                case "E":
                    MatrixEqual();
                    break;
                case "I":
                    MatrixInverse();
                    break;
                case "T":
                    MatrixTranspose();
                    break;
            }
        }
    }

    private static Tuple<int, int> ReadMatrixSize()
    {
        Console.WriteLine("Размер матрицы должен состоять из двух частей: количество строк и количества столбцов");
        Console.WriteLine("Например: 2x3, 5x5");
        Console.WriteLine();

        Console.Write("Введите размер матрицы: ");
        var matrixSize = Console.ReadLine() ?? "";

        var todo = matrixSize.Split("x");
        if (todo.Length != 2)
            throw new ArgumentException("Размер матрицы не подходит по формату");

        var rows = int.Parse(todo[0]);
        var cols = int.Parse(todo[1]);

        return new(rows, cols);
    }

    private static double[] ReadMatrixLine(int cols)
    {
        var todo = Console.ReadLine();
        var todo2 = string.IsNullOrEmpty(todo)
            ? Array.Empty<string>()
            : todo.Trim().Split(',', ' ');

        if (todo2.Length != cols)
            throw new Exception("TODO");

        var lineData = Array.ConvertAll(todo2, Convert.ToDouble);

        return lineData;
    }

    private static Matrix ReadMatrixData()
    {
        var (rows, cols) = ReadMatrixSize();
        var data = new double[rows, cols];

        for (int i = 0; i < rows; i++)
        {
            Console.Write($"Введите числа, для {i + 1} строки ({cols} числа): ");
            var lineData = ReadMatrixLine(cols);
            for (int j = 0; j < cols; j++)
                data[i, j] = lineData[j];
        }

        return new(data);
    }


    private static void MatrixSum()
    {
        Console.Title = "Matrix: Sum";
        Console.Clear();
        Console.WriteLine("<== Сложение матриц ==>");
        Console.WriteLine();

        Matrix matrixFirstRead;
        try
        {
            Console.WriteLine("Введите значение первой матрицы:");
            matrixFirstRead = ReadMatrixData();
        }
        catch (Exception e)
        {
            Console.WriteLine($"Ошибка при чтении матрицы: {e.Message}");
            Console.ReadLine();
            return;
        }

        Console.Clear();
        Console.WriteLine("<== Сложение матриц ==>");
        Console.WriteLine();

        Matrix matrixSecondRead;
        try
        {
            Console.WriteLine("Введите значение второй матрицы:");
            matrixSecondRead = ReadMatrixData();
        }
        catch (Exception e)
        {
            Console.WriteLine($"Ошибка при чтении матрицы: {e.Message}");
            Console.ReadLine();
            return;
        }


        var matrixSum = matrixFirstRead + matrixSecondRead;

        Console.Clear();
        Console.WriteLine("<== Сложение матриц ==>");
        Console.WriteLine();
        Console.WriteLine("Введенная первая матрица:");
        Console.WriteLine(matrixFirstRead);
        Console.WriteLine();
        Console.WriteLine("Введенная вторая матрица:");
        Console.WriteLine(matrixSecondRead);
        Console.WriteLine();
        Console.WriteLine("Матрица в результате сложения:");
        Console.WriteLine(matrixSum);

        Console.ReadLine();
    }

    private static void MatrixSubtract()
    {
        Console.Title = "Matrix: Subtract";
        Console.Clear();
        Console.WriteLine("<== Вычитание матриц ==>");
        Console.WriteLine();

        Matrix matrixFirstRead;
        try
        {
            Console.WriteLine("Введите значение первой матрицы:");
            matrixFirstRead = ReadMatrixData();
        }
        catch (Exception e)
        {
            Console.WriteLine($"Ошибка при чтении матрицы: {e.Message}");
            Console.ReadLine();
            return;
        }

        Console.Clear();
        Console.WriteLine("<== Вычитание матриц ==>");
        Console.WriteLine();

        Matrix matrixSecondRead;
        try
        {
            Console.WriteLine("Введите значение второй матрицы:");
            matrixSecondRead = ReadMatrixData();
        }
        catch (Exception e)
        {
            Console.WriteLine($"Ошибка при чтении матрицы: {e.Message}");
            Console.ReadLine();
            return;
        }


        var matrixSum = matrixFirstRead - matrixSecondRead;

        Console.Clear();
        Console.WriteLine("<== Вычитание матриц ==>");
        Console.WriteLine();
        Console.WriteLine("Введенная первая матрица:");
        Console.WriteLine(matrixFirstRead);
        Console.WriteLine();
        Console.WriteLine("Введенная вторая матрица:");
        Console.WriteLine(matrixSecondRead);
        Console.WriteLine();
        Console.WriteLine("Матрица в результате вычитания:");
        Console.WriteLine(matrixSum);

        Console.ReadLine();
    }

    private static void MatrixEqual()
    {
        Console.Title = "Matrix: Equal";
        Console.Clear();
        Console.WriteLine("<== Проверить матрицы на равенства ==>");
        Console.WriteLine();

        Matrix matrixFirstRead;
        try
        {
            Console.WriteLine("Введите значение первой матрицы:");
            matrixFirstRead = ReadMatrixData();
        }
        catch (Exception e)
        {
            Console.WriteLine($"Ошибка при чтении матрицы: {e.Message}");
            Console.ReadLine();
            return;
        }

        Console.Clear();
        Console.WriteLine("<== Проверить матрицы на равенства ==>");
        Console.WriteLine();

        Matrix matrixSecondRead;
        try
        {
            Console.WriteLine("Введите значение второй матрицы:");
            matrixSecondRead = ReadMatrixData();
        }
        catch (Exception e)
        {
            Console.WriteLine($"Ошибка при чтении матрицы: {e.Message}");
            Console.ReadLine();
            return;
        }

        var isEqual = matrixFirstRead == matrixSecondRead;
        var message = isEqual ? "равны" : "не равны";

        Console.Clear();
        Console.WriteLine("<== Проверить матрицы на равенства ==>");
        Console.WriteLine();
        Console.WriteLine("Введенная первая матрица:");
        Console.WriteLine(matrixFirstRead);
        Console.WriteLine();
        Console.WriteLine("Введенная вторая матрица:");
        Console.WriteLine(matrixSecondRead);
        Console.WriteLine();
        Console.WriteLine($"Обратная {message}");

        Console.ReadLine();
    }

    private static void MatrixInverse()
    {
        Console.Title = "Matrix: Inverse";
        Console.Clear();
        Console.WriteLine("<== Вычисление обратной матрицы ==>");
        Console.WriteLine();

        Matrix matrixRead;
        try
        {
            Console.WriteLine("Введите значение матрицы:");
            matrixRead = ReadMatrixData();
        }
        catch (Exception e)
        {
            Console.WriteLine($"Ошибка при чтении матрицы: {e.Message}");
            Console.ReadLine();
            return;
        }

        var matrixInverse = matrixRead.Clone();

        try
        {
            matrixInverse.Inverse();
        }
        catch (Exception e)
        {
            Console.WriteLine($"Ошибка при вычислении обратной матрицы: {e.Message}");
            Console.ReadLine();
            return;
        }

        Console.Clear();
        Console.WriteLine("<== Вычисление обратной матрицы ==>");
        Console.WriteLine();
        Console.WriteLine("Введенная матрица:");
        Console.WriteLine(matrixRead);
        Console.WriteLine();
        Console.WriteLine("Обратная матрица:");
        Console.WriteLine(matrixInverse);

        Console.ReadLine();
    }

    private static void MatrixTranspose()
    {
        Console.Title = "Matrix: Transpose";
        Console.Clear();
        Console.WriteLine("<== Вычисление транспонированной матрицы ==>");
        Console.WriteLine();

        Matrix matrixRead;
        try
        {
            Console.WriteLine("Введите значение матрицы:");
            matrixRead = ReadMatrixData();
        }
        catch (Exception e)
        {
            Console.WriteLine($"Ошибка при чтении матрицы: {e.Message}");
            Console.ReadLine();
            return;
        }

        var matrixTranspose = matrixRead.Clone();
        matrixTranspose.Transpose();

        Console.Clear();
        Console.WriteLine("<== Вычисление транспонированной матрицы ==>");
        Console.WriteLine();
        Console.WriteLine("Введенная матрица:");
        Console.WriteLine(matrixRead);
        Console.WriteLine();
        Console.WriteLine("Транспонированная матрица:");
        Console.WriteLine(matrixTranspose);

        Console.ReadLine();
    }
}