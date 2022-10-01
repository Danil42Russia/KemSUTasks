using Complex;
using NUnit.Framework;

namespace ComplexTests;

public class MyStringTest
{
    [Test]
    public void MyString_CharConstructor()
    {
        var str = new MyString('c');

        Assert.AreEqual(1, str.Lenght);
        Assert.AreEqual("c", str.ToString());
    }

    [Test]
    public void MyString_StringConstructor()
    {
        var str = new MyString("MyString");

        Assert.AreEqual(8, str.Lenght);
        Assert.AreEqual("MyString", str.ToString());
    }

    [Test]
    public void MyString_EmptyConstructor()
    {
        var str = new MyString();

        Assert.AreEqual(0, str.Lenght);
        Assert.AreEqual("", str.ToString());
    }


    [Test]
    public void MyString_Clear()
    {
        var str = new MyString("MyString");
        str.Clear();

        Assert.AreEqual(0, str.Lenght);
        Assert.AreEqual("", str.ToString());
    }

    [Test]
    public void MyString_Equals()
    {
        var str1 = new MyString("s");
        var str2 = new MyString('s');

        Assert.AreEqual(str1, str2);
        Assert.AreEqual(str1.Lenght, str2.Lenght);
        Assert.AreEqual(str1.ToString(), str2.ToString());
    }
}