using System;

namespace Matrix
{
    class Program
    {
        static void Main(string[] args)
        {
            double[,] d1 =
            {
                { 1, -2, 1 },
                { 2, 1, -1 },
                { 3, 2, -2 }
            };

            var m1 = new Matrix(d1);

            m1.Inverse();
            Console.WriteLine(m1);
            var m2 = m1.Clone();

            m1.Transpose();
            Console.WriteLine(m1);

            m1 *= 3;
            Console.WriteLine(m1);

            m1 *= m2;
            Console.WriteLine(m1);

            m1 -= m2;
            Console.WriteLine(m1);
        }
    }
}