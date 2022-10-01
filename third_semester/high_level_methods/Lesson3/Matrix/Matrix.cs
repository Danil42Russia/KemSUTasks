using System.Text;

namespace Matrix;

public sealed class Matrix
{
    private double[,] _matrix;
    private int _rows;
    private int _cols;

    public Matrix(double[,] matrix)
    {
        _matrix = matrix;

        _rows = matrix.GetUpperBound(0) + 1;
        _cols = matrix.GetUpperBound(1) + 1;
    }

    public Matrix Clone()
    {
        return new((double[,])_matrix.Clone());
    }

    public bool IsSquare()
    {
        return _rows == _cols;
    }

    public void Transpose()
    {
        var tmpData = new double[_cols, _rows];

        for (var row = 0; row < _rows; row++)
        for (var col = 0; col < _cols; col++)
            tmpData[col, row] = _matrix[row, col];

        (_cols, _rows) = (_rows, _cols);
        _matrix = tmpData;
    }

    public Matrix Minor(int rowIndex, int colIndex)
    {
        if (rowIndex > _rows || colIndex > _cols)
            throw new Exception("Строка или столбец не принадлежат матрице");

        var dataTmp = new double[_rows - 1, _cols - 1];

        int offsetX = 0;
        for (int i = 0; i < _rows; i++)
        {
            int offsetY = 0;
            if (i == rowIndex)
            {
                offsetX++;
                continue;
            }

            for (int col = 0; col < _cols; col++)
            {
                if (col == colIndex)
                {
                    offsetY++;
                    continue;
                }

                dataTmp[i - offsetX, col - offsetY] = _matrix[i, col];
            }
        }

        return new(dataTmp);
    }

    public double Determinant()
    {
        if (!IsSquare())
            throw new Exception("Матрица должна быть квадратной");

        switch (_rows)
        {
            case 1:
                return _matrix[0, 0];
            case 2:
                return _matrix[0, 0] * _matrix[1, 1] - _matrix[0, 1] * _matrix[1, 0];
        }

        double result = 0;
        var col = 0;
        for (int row = 0; row < _rows; row++)
        {
            var sign = (row + 1) % 2 == (col + 1) % 2 ? 1 : -1;

            result += sign * _matrix[row, col] * Minor(row, col).Determinant();
        }

        return result;
    }

    public void Inverse()
    {
        if (!IsSquare())
            throw new Exception("Обратная матрица существует только для квадратных матриц");

        var determinant = Determinant();
        if (determinant == 0)
            return;

        var matrix = Clone();
        for (int row = 0; row < _rows; row++)
        for (int col = 0; col < _cols; col++)
        {
            var tmpMatrix = matrix.Minor(row, col);

            var detMinor = tmpMatrix.Determinant();
            var pow = Math.Pow(-1, row + 1 + col + 1);

            _matrix[col, row] = 1 / determinant * detMinor * pow;
        }
    }

    public Tuple<int, int> Shape()
    {
        return new(_rows, _cols);
    }

    public static Matrix operator *(Matrix left, Matrix right)
    {
        if (left._cols != right._rows)
            throw new Exception(
                "Умножение не возможно. Количество столбцов первой матрицы не равно количеству строк второй матрицы.");

        var tmpData = new double[left._rows, right._cols];

        for (var row = 0; row < left._rows; row++)
        for (var col = 0; col < right._cols; col++)
        {
            tmpData[row, col] = 0;

            for (var k = 0; k < left._cols; k++)
                tmpData[row, col] += left._matrix[row, k] * right._matrix[k, col];
        }

        return new(tmpData);
    }

    public static Matrix operator *(Matrix left, double value)
    {
        var tmpData = new double[left._rows, left._cols];

        for (var row = 0; row < left._rows; row++)
        for (var col = 0; col < left._cols; col++)
        {
            tmpData[row, col] += left._matrix[row, col] * value;
        }

        return new(tmpData);
    }

    public static Matrix operator +(Matrix left, Matrix right)
    {
        if (left._cols != right._cols || left._rows != right._rows)
            throw new Exception("Для матриц с разным размером сложение не возможно");

        var tmpData = new double[left._rows, right._cols];

        for (var row = 0; row < left._rows; row++)
        for (var col = 0; col < right._cols; col++)
            tmpData[row, col] = left._matrix[row, col] + right._matrix[row, col];

        return new(tmpData);
    }

    public static Matrix operator -(Matrix left, Matrix right)
    {
        if (left._cols != right._cols || left._rows != right._rows)
            throw new Exception("Для матриц с разным размером вычитание не возможно");

        var tmpData = new double[left._rows, right._cols];

        for (var row = 0; row < left._rows; row++)
        for (var col = 0; col < right._cols; col++)
            tmpData[row, col] = left._matrix[row, col] - right._matrix[row, col];

        return new(tmpData);
    }

    public double this[int row, int col] => _matrix[row, col];

    public override bool Equals(object? obj)
    {
        if (obj?.GetType() != GetType())
            return false;

        var matrix = (Matrix)obj;

        if (_cols != matrix._cols || _rows != matrix._rows)
            return false;

        for (int row = 0; row < _rows; row++)
        for (int col = 0; col < _cols; col++)
            if (matrix._matrix[row, col] != _matrix[row, col])
                return false;

        return true;
    }

    public override int GetHashCode()
    {
        return HashCode.Combine(_matrix, _cols, _rows);
    }

    public static bool operator ==(Matrix left, Matrix right)
    {
        return left.Equals(right);
    }

    public static bool operator !=(Matrix left, Matrix right)
    {
        return !(left == right);
    }

    public override string ToString()
    {
        var sb = new StringBuilder();

        for (var row = 0; row < _rows; row++)
        {
            for (var col = 0; col < _cols; col++)
                sb.Append(_matrix[row, col].ToString("F2").PadLeft(8));

            if (row != _rows - 1)
                sb.AppendLine();
        }

        return sb.ToString();
    }
}