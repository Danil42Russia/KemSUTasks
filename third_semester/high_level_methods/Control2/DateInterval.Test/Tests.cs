using System;
using NUnit.Framework;

namespace DateInterval.Test;

public class Tests
{
    [Test, TestCaseSource(nameof(_hourCases))]
    public void ToHour(Tuple<DateInterval, long> tuple)
    {
        var (actual, expected) = tuple;

        var hours = (long)actual;

        Assert.AreEqual(expected, hours);
    }

    private static Tuple<DateInterval, long>[] _hourCases =
    {
        new(new DateInterval(), 0),
        new(new DateInterval(1), 1),
        new(new DateInterval(0, 1), 24),
        new(new DateInterval(0, 0, 1), 8_760),
        new(new DateInterval(23, 364, 99), 875_999)
    };

    [Test, TestCaseSource(nameof(_yearCases))]
    public void ToYear(Tuple<DateInterval, float> tuple)
    {
        var (actual, expected) = tuple;

        var year = (float)actual;

        Assert.AreEqual(expected, year);
    }

    private static Tuple<DateInterval, float>[] _yearCases =
    {
        new(new DateInterval(), 0),
        new(new DateInterval(12, 182), 0.5F),
        new(new DateInterval(18, 346, 25), 25.95F),
        new(new DateInterval(0, 0, 99), 99F)
    };

    [Test]
    public void Zero()
    {
        var di = new DateInterval();

        var actual = !di;

        Assert.True(actual);
    }

    [Test]
    [TestCase(0, 0, 0)]
    [TestCase(5, 5, 5)]
    [TestCase(15, 186, 23)]
    [TestCase(23, 364, 99)]
    public void Constructor(int hour, int day, int year)
    {
        var di = new DateInterval(hour, day, year);

        Assert.AreEqual(hour, di.Hour);
        Assert.AreEqual(day, di.Day);
        Assert.AreEqual(year, di.Year);
    }

    [Test]
    public void Sum()
    {
        var left = new DateInterval(11, 305, 47);
        var right = new DateInterval(23, 119, 26);

        var expected = new DateInterval(10, 60, 74);
        var actual = left + right;

        Assert.AreEqual(expected, actual);
    }

    [Test]
    public void Subtract()
    {
        var left = new DateInterval(10, 60, 74);
        var right = new DateInterval(23, 119, 26);

        var expected = new DateInterval(11, 305, 47);
        var actual = left - right;

        Assert.AreEqual(expected, actual);
    }

    [Test]
    public void Multiplication()
    {
        var left = new DateInterval(2, 2, 2);

        var expected = new DateInterval(4, 4, 4);
        var actual = left * 2;

        Assert.AreEqual(expected, actual);
    }

    [Test]
    public void ToMaxValue()
    {
        var di = new DateInterval(12, 245, 50);
        var expected = new DateInterval(23, 364, 99);

        var actual = ~di;

        Assert.AreEqual(expected, actual);
    }

    [Test]
    [TestCase(0, 0, 0, ExpectedResult = "00-000-00")]
    [TestCase(5, 5, 5, ExpectedResult = "05-005-05")]
    [TestCase(23, 364, 99, ExpectedResult = "23-364-99")]
    public string DateToString(int hour, int day, int year)
    {
        var time = new DateInterval(hour, day, year);

        return time.ToString();
    }

    [Test]
    [TestCase(-1, -1, -1)]
    [TestCase(-1, 0, 0)]
    [TestCase(24, 0, 0)]
    [TestCase(0, -1, 0)]
    [TestCase(0, 365, 0)]
    [TestCase(0, 0, -1)]
    [TestCase(0, 0, 100)]
    [TestCase(24, 365, 100)]
    public void ConstructorArgumentOutOfRange(int hour, int day, int year)
    {
        Assert.Throws<ArgumentOutOfRangeException>(() =>
        {
            var unused = new DateInterval(hour, day, year);
        });
    }

    [Test]
    public void MinHoursArgumentOutOfRange()
    {
        var left = new DateInterval();
        var right = new DateInterval(1);

        var expected = new DateInterval();
        var actual = left - right;

        Assert.AreEqual(expected, actual);
    }

    [Test]
    public void MaxHoursArgumentOutOfRange()
    {
        var left = new DateInterval(23, 364, 99);
        var right = new DateInterval(1);

        var expected = new DateInterval();
        var actual = left + right;

        Assert.AreEqual(expected, actual);
    }
}