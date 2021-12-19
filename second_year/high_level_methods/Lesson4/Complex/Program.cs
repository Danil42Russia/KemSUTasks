namespace Complex;

static class Program
{
    static void Main(string[] args)
    {
        var str = new MyString("+5i-21");
        
        var cn = new ComplexNumber(str);

        Console.WriteLine(cn + " | " + cn.Real + " | " + cn.Imaginary);
    }
}