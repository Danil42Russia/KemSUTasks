using System;
using Complex;
using NUnit.Framework;

namespace ComplexTests;

public class ComplexNumberTest
{
    [Test, TestCaseSource(nameof(_complexNumberStringCases))]
    public void ComplexNumber_ParseString(string number, Tuple<int, int> expected)
    {
        var str = new ComplexNumber(number);

        var (real, imaginary) = expected;
        Assert.AreEqual(real, str.Real);
        Assert.AreEqual(imaginary, str.Imaginary);
    }

    private static object[] _complexNumberStringCases =
    {
        new object[] { "33i12", new Tuple<int, int>(33, 12) },
        new object[] { "-7i100", new Tuple<int, int>(-7, 100) },
        new object[] { "+5i-21", new Tuple<int, int>(5, -21) },
        new object[] { "-16i+7", new Tuple<int, int>(-16, 7) },
        new object[] { "-8i-6", new Tuple<int, int>(-8, -6) },
        new object[] { "+6i+6", new Tuple<int, int>(6, 6) }
    };

    [Test, TestCaseSource(nameof(_complexNumberBadCases))]
    public void ComplexNumber_BadParse(string number)
    {
        var str = new ComplexNumber(number);

        Assert.AreEqual(0, str.Real);
        Assert.AreEqual(0, str.Imaginary);
    }

    private static string[] _complexNumberBadCases =
    {
        "11t33", "1i2i3", "1i5q", "1qi5", "1i", "i5", "i"
    };

    [Test]
    public void ComplexNumber_Sum()
    {
        var cn1 = new ComplexNumber(4, 2);
        var cn2 = new ComplexNumber(-5, 3);

        var expected = new ComplexNumber(-1, 5);
        var actual = cn1 + cn2;

        Assert.AreEqual(expected, actual);
    }

    [Test]
    public void ComplexNumber_Multiplication()
    {
        var cn1 = new ComplexNumber(3, -2);
        var cn2 = new ComplexNumber(-5, 4);

        var expected = new ComplexNumber(-7, 22);
        var actual = cn1 * cn2;

        Assert.AreEqual(expected, actual);
    }

    [Test, TestCaseSource(nameof(_complexNumberToStringCases))]
    public void ComplexNumber_ToString(Tuple<string, string> tuple)
    {
        var (actual, expected) = tuple;
        var cn = new ComplexNumber(actual);

        Assert.AreEqual(expected, cn.ToString());
    }

    private static Tuple<string, string>[] _complexNumberToStringCases =
    {
        new("33i12", "33i12"),
        new("-7i100", "-7i100"),
        new("+5i-21", "5i-21"),
        new("-16i+7", "-16i7"),
        new("-8i-6", "-8i-6"),
        new("+6i+6", "6i6")
    };
}