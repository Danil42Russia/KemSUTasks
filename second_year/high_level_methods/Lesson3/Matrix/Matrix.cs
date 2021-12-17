using System;
using System.Text;

namespace Matrix
{
    public class Matrix
    {
        private double[,] _matrix;
        private int _cols;
        private int _rows;

        public Matrix(double[,] matrix)
        {
            _matrix = matrix;

            _rows = matrix.GetUpperBound(0) + 1;
            _cols = matrix.GetUpperBound(1) + 1;
        }

        public Matrix Clone()
        {
            return new Matrix((double[,])_matrix.Clone());
        }

        public bool IsSquare()
        {
            return _rows == _cols;
        }

        public void Transpose()
        {
            var m3 = new double[_cols, _rows];

            for (var i = 0; i < _rows; i++)
            for (var j = 0; j < _cols; j++)
            {
                m3[j, i] = _matrix[i, j];
            }

            (_cols, _rows) = (_rows, _cols);
            _matrix = m3;
        }

        public Matrix Minor(int row, int column)
        {
            if (row > _rows || column > _cols)
                throw new Exception("Строка или столбец не принадлежат матрице");

            var dataTmp = new double[_rows - 1, _cols - 1];

            int offsetX = 0;
            for (int i = 0; i < _rows; i++)
            {
                int offsetY = 0;
                if (i == row)
                {
                    offsetX++;
                    continue;
                }

                for (int t = 0; t < _cols; t++)
                {
                    if (t == column)
                    {
                        offsetY++;
                        continue;
                    }

                    dataTmp[i - offsetX, t - offsetY] = _matrix[i, t];
                }
            }

            return new Matrix(dataTmp);
        }

        public double Determinant()
        {
            if (!IsSquare())
                throw new Exception("Матрица должна быть квадратной");

            if (_rows == 2)
                return _matrix[0, 0] * _matrix[1, 1] - _matrix[0, 1] * _matrix[1, 0];

            double result = 0;
            var j = 0;
            for (int i = 0; i < _rows; i++)
            {
                var sign = (i + 1) % 2 == (j + 1) % 2 ? 1 : -1;

                result += sign * _matrix[i, j] * Minor(i, j).Determinant();
            }

            return result;
        }

        public void Inverse()
        {
            if (!IsSquare())
                throw new Exception("Обратная матрица существует только для квадратных матриц");

            var matrix = Clone();

            var determinant = Determinant();
            if (determinant == 0)
                return;

            for (int i = 0; i < _rows; i++)
            {
                for (int j = 0; j < _cols; j++)
                {
                    var tmp = matrix.Minor(i, j);

                    var detMinor = tmp.Determinant();
                    var pow = Math.Pow(-1, i + 1 + j + 1);

                    _matrix[j, i] = 1 / determinant * detMinor * pow;
                }
            }
        }

        public Tuple<int, int> Shape()
        {
            return new Tuple<int, int>(_rows, _cols);
        }

        public static Matrix operator *(Matrix m1, Matrix m2)
        {
            if (m1._cols != m2._rows)
            {
                throw new Exception(
                    "Умножение не возможно. Количество столбцов первой матрицы не равно количеству строк второй матрицы.");
            }

            var m3 = new double[m1._rows, m2._cols];

            for (var i = 0; i < m1._rows; i++)
            for (var j = 0; j < m2._cols; j++)
            {
                m3[i, j] = 0;

                for (var k = 0; k < m1._cols; k++)
                {
                    m3[i, j] += m1._matrix[i, k] * m2._matrix[k, j];
                }
            }

            return new Matrix(m3);
        }

        public static Matrix operator *(Matrix m1, double value)
        {
            var m3 = new double[m1._rows, m1._cols];

            for (var i = 0; i < m1._rows; i++)
            for (var j = 0; j < m1._cols; j++)
            {
                m3[i, j] += m1._matrix[i, j] * value;
            }

            return new Matrix(m3);
        }

        public static Matrix operator +(Matrix m1, Matrix m2)
        {
            if (m1._cols != m2._cols || m1._rows != m2._rows)
            {
                throw new Exception("Для матриц с разным размером сложение не возможно");
            }

            var m3 = new double[m1._rows, m2._cols];

            for (var i = 0; i < m1._rows; i++)
            for (var j = 0; j < m2._cols; j++)
                m3[i, j] = m1._matrix[i, j] + m2._matrix[i, j];

            return new Matrix(m3);
        }

        public static Matrix operator -(Matrix m1, Matrix m2)
        {
            if (m1._cols != m2._cols || m1._rows != m2._rows)
            {
                throw new Exception("Для матриц с разным размером вычитание не возможно");
            }

            var m3 = new double[m1._rows, m2._cols];

            for (var i = 0; i < m1._rows; i++)
            for (var j = 0; j < m2._cols; j++)
                m3[i, j] = m1._matrix[i, j] - m2._matrix[i, j];

            return new Matrix(m3);
        }

        public double this[int row, int col] => _matrix[row, col];

        public override bool Equals(object obj)
        {
            if (obj?.GetType() != GetType())
                return false;

            Matrix matrix = (Matrix)obj;

            if (_cols != matrix._cols || _rows != matrix._rows)
                return false;

            for (int rows = 0; rows < _rows; rows++)
            for (int cols = 0; cols < _cols; cols++)
                if (matrix._matrix[rows, cols] != _matrix[rows, cols])
                    return false;

            return true;
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(_matrix, _cols, _rows);
        }

        public static bool operator ==(Matrix m1, Matrix m2)
        {
            if ((object)m1 == null || (object)m2 == null)
                return false;

            return m1.Equals(m2);
        }

        public static bool operator !=(Matrix m1, Matrix m2)
        {
            return !(m1 == m2);
        }

        public override string ToString()
        {
            var sb = new StringBuilder();

            for (var i = 0; i < _rows; i++)
            {
                for (var j = 0; j < _cols; j++)
                    sb.Append(_matrix[i, j].ToString().PadLeft(4));

                sb.AppendLine();
            }

            return sb.ToString();
        }
    }
}