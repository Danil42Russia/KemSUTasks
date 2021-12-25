using System;
using NUnit.Framework;

namespace TimeTests;

public class Tests
{
    [Test]
    [TestCase(0, 0, 0)]
    [TestCase(23, 0, 0)]
    [TestCase(0, 59, 0)]
    [TestCase(0, 0, 59)]
    [TestCase(10, 20, 30)]
    public void Time_Constructor(int hour, int minute, int second)
    {
        var time = new Time.Time(hour, minute, second);

        Assert.AreEqual(hour, time.Hour);
        Assert.AreEqual(minute, time.Minute);
        Assert.AreEqual(second, time.Second);
    }

    [Test]
    [TestCase(-1, 0, 0)]
    [TestCase(24, 0, 0)]
    [TestCase(0, -1, 0)]
    [TestCase(0, 60, 0)]
    [TestCase(0, 0, -1)]
    [TestCase(0, 0, 60)]
    public void Time_ConstructorArgumentOutOfRange(int hour, int minute, int second)
    {
        Assert.Throws<ArgumentOutOfRangeException>(() =>
        {
            var time = new Time.Time(hour, minute, second);
        });
    }

    [Test]
    [TestCase(0, 0, 0)]
    [TestCase(23, 59, 59)]
    public void Time_EditFields(int hour, int minute, int second)
    {
        var time = new Time.Time(10, 20, 30);
        time.Hour = hour;
        time.Minute = minute;
        time.Second = second;

        Assert.AreEqual(hour, time.Hour);
        Assert.AreEqual(minute, time.Minute);
        Assert.AreEqual(second, time.Second);
    }

    [Test]
    public void Time_ToString()
    {
        var time = new Time.Time(12, 5, 20);

        Assert.AreEqual("12:05:20", time.ToString());
    }
}