namespace Complex;

static class Program
{
    private static void Main()
    {
        var str = new MyString("+5i-21");

        var cn = new ComplexNumber(str);

        Console.WriteLine(cn + " | " + cn.Real + " | " + cn.Imaginary);
    }
}