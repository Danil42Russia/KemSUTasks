using System;
using NUnit.Framework;

namespace MatrixTests;

public class Tests
{
    [Test]
    public void Matrix_Multiplication()
    {
        double[,] d1 =
        {
            { 1, 0 },
            { 2, 1 },
            { -1, 1 }
        };
        double[,] d2 =
        {
            { 1, 2, 0 },
            { 0, -1, 1 }
        };

        double[,] d3 =
        {
            { 1, 2, 0 },
            { 2, 3, 1 },
            { -1, -3, 1 }
        };


        var m1 = new Matrix.Matrix(d1);
        var m2 = new Matrix.Matrix(d2);

        var expected = new Matrix.Matrix(d3);
        var actual = m1 * m2;

        Assert.AreEqual(expected, actual);
    }

    [Test]
    public void Matrix_MultiplicationValue()
    {
        double[,] d1 =
        {
            { 2, 4 },
            { 5, 3 },
            { -1, 0 }
        };

        double[,] d2 =
        {
            { 5, 10 },
            { 12.5, 7.5 },
            { -2.5, 0 }
        };


        var m1 = new Matrix.Matrix(d1);

        var expected = new Matrix.Matrix(d2);
        var actual = m1 * 2.5;

        Assert.AreEqual(expected, actual);
    }

    [Test]
    public void Matrix_Sum()
    {
        double[,] d1 =
        {
            { 5, 1 },
            { 3, 4 },
            { 2, 7 }
        };
        double[,] d2 =
        {
            { 1, 3 },
            { 2, 5 },
            { 4, 2 }
        };

        double[,] d3 =
        {
            { 6, 4 },
            { 5, 9 },
            { 6, 9 }
        };

        var m1 = new Matrix.Matrix(d1);
        var m2 = new Matrix.Matrix(d2);

        var expected = new Matrix.Matrix(d3);
        var actual = m1 + m2;

        Assert.AreEqual(expected, actual);
    }

    [Test]
    public void Matrix_Subtract()
    {
        double[,] d1 =
        {
            { 6, 4 },
            { 5, 9 },
            { 6, 9 }
        };
        double[,] d2 =
        {
            { 1, 3 },
            { 2, 5 },
            { 4, 2 }
        };

        double[,] d3 =
        {
            { 5, 1 },
            { 3, 4 },
            { 2, 7 }
        };

        var m1 = new Matrix.Matrix(d1);
        var m2 = new Matrix.Matrix(d2);

        var expected = new Matrix.Matrix(d3);
        var actual = m1 - m2;

        Assert.AreEqual(expected, actual);
    }

    [Test]
    public void Matrix_Transpose()
    {
        double[,] d1 =
        {
            { 4, 2, 0 },
            { 3, 4, 5 }
        };

        double[,] d2 =
        {
            { 4, 3 },
            { 2, 4 },
            { 0, 5 }
        };

        var expected = new Matrix.Matrix(d2);
        var actual = new Matrix.Matrix(d1);
        actual.Transpose();

        Assert.AreEqual(expected, actual);
        Assert.AreEqual(expected.Shape(), new Tuple<int, int>(3, 2));
    }

    [Test]
    public void Matrix_GetFromNonIndex()
    {
        double[,] d1 =
        {
            { 5, 2, 0 },
            { 3, 4, 4 },
            { 1, 6, 8 }
        };
        var matrix = new Matrix.Matrix(d1);

        Assert.Throws<IndexOutOfRangeException>(() =>
        {
            var d = matrix[3, 3];
        });
    }

    [Test]
    [TestCase(0, 0)]
    [TestCase(0, 2)]
    [TestCase(2, 0)]
    [TestCase(2, 2)]
    public void Matrix_GetFromIndex(int row, int col)
    {
        double[,] d1 =
        {
            { 5, 2, 0 },
            { 3, 4, 4 },
            { 1, 6, 8 }
        };
        var matrix = new Matrix.Matrix(d1);

        Assert.AreEqual(matrix[row, col], d1[row, col]);
    }

    [Test]
    public void Matrix_Clone()
    {
        double[,] d1 =
        {
            { 4, 2, 0 },
            { 3, 4, 5 }
        };

        var originMatrix = new Matrix.Matrix(d1);

        var cloneMatrix = originMatrix.Clone();
        cloneMatrix.Transpose();

        Assert.AreNotEqual(originMatrix, cloneMatrix);
        Assert.AreEqual(originMatrix.Shape(), new Tuple<int, int>(2, 3));
        Assert.AreEqual(cloneMatrix.Shape(), new Tuple<int, int>(3, 2));
    }

    [Test]
    public void Matrix_Equal()
    {
        double[,] d1 =
        {
            { 5, 0 },
            { 3, 4 }
        };
        var m1 = new Matrix.Matrix(d1);
        var m2 = new Matrix.Matrix(d1);

        Assert.True(m1 == m2);
    }

    [Test]
    public void Matrix_NotEqual()
    {
        double[,] d1 =
        {
            { 5, 0 },
            { 3, 4 }
        };
        var m1 = new Matrix.Matrix(d1);

        double[,] d2 =
        {
            { 5, 3 },
            { 0, 4 }
        };
        var m2 = new Matrix.Matrix(d2);

        Assert.True(m1 != m2);
    }

    [Test, TestCaseSource(nameof(_determinantCases))]
    public void Matrix_Determinant(double[,] data, double actual)
    {
        var matrix = new Matrix.Matrix(data);

        Assert.AreEqual(matrix.Determinant(), actual);
    }

    private static object[] _determinantCases =
    {
        new object[]
        {
            new double[,]
            {
                { 0, 1 },
                { -1, 0 }
            },
            1
        },
        new object[]
        {
            new double[,]
            {
                { 1, -2, 3 },
                { 0, 7, 4 },
                { 5, 3, -3 }
            },
            -178
        },
        new object[]
        {
            new double[,]
            {
                { -2, 2, 1, 0 },
                { 1, -3, 3, 7 },
                { 2, -1, 2, -3 },
                { -5, 4, -1, 2 }
            },
            -18
        },
        new object[]
        {
            new double[,]
            {
                { 1 },
            },
            1
        }
    };

    [Test, TestCaseSource(nameof(_inverseCases))]
    public void Matrix_Inverse(Tuple<double[,], double[,]> tuple)
    {
        var (actualData, expectedData) = tuple;

        var actual = new Matrix.Matrix(actualData);
        actual.Inverse();

        var expected = new Matrix.Matrix(expectedData);

        Assert.AreEqual(expected, actual);
    }

    private static Tuple<double[,], double[,]>[] _inverseCases =
    {
        new(
            new double[,]
            {
                { 1, -2, 1 },
                { 2, 1, -1 },
                { 3, 2, -2 }
            },
            new double[,]
            {
                { 0, 2, -1 },
                { -1, 5, -3 },
                { -1, 8, -5 }
            }
        ),
        new(
            new double[,]
            {
                { 3, 4 },
                { 5, 6 }
            },
            new double[,]
            {
                { -3, 2 },
                { 2.5, -1.5 }
            }
        ),
    };

    [Test, TestCaseSource(nameof(_minorCases))]
    public void Matrix_Minor(Tuple<int, int> coords, double[,] dataActual)
    {
        double[,] dataExpectedD =
        {
            { 1, 2, 3 },
            { 4, 5, 6 },
            { 7, 8, 9 }
        };
        var m1 = new Matrix.Matrix(dataExpectedD);
        var expected = m1.Minor(coords.Item1, coords.Item2);

        var actual = new Matrix.Matrix(dataActual);

        Assert.AreEqual(expected, actual);
    }

    private static object[] _minorCases =
    {
        new object[]
        {
            new Tuple<int, int>(0, 0),
            new double[,]
            {
                { 5, 6 },
                { 8, 9 }
            }
        },
        new object[]
        {
            new Tuple<int, int>(2, 2),
            new double[,]
            {
                { 1, 2 },
                { 4, 5 }
            }
        }
    };

    [Test]
    public void Matrix_IsSquare()
    {
        double[,] d1 =
        {
            { 1, -2, 1 },
            { 2, 1, -1 },
            { 3, 2, -2 }
        };
        var matrix = new Matrix.Matrix(d1);

        Assert.True(matrix.IsSquare());
    }
}