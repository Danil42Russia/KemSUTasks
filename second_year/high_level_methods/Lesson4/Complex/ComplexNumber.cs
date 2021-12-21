namespace Complex;

public sealed class ComplexNumber : MyString
{
    private readonly int _real;
    private readonly int _imaginary;

    public ComplexNumber(int real, int imaginary)
    {
        _real = real;
        _imaginary = imaginary;
    }

    public ComplexNumber(string str) : base(str)
    {
        var result = str.Split('i');
        if (result.Length != 2)
            return;

        if (!int.TryParse(result[0], out _real))
            return;

        if (!int.TryParse(result[1], out _imaginary))
            _real = 0;
    }

    public ComplexNumber(MyString str) : this(str.ToString())
    {
    }

    public int Real => _real;
    public int Imaginary => _imaginary;

    public static ComplexNumber operator +(ComplexNumber left, ComplexNumber right) =>
        new(left._real + right._real, left._imaginary + right._imaginary);

    public static ComplexNumber operator *(ComplexNumber left, ComplexNumber right) =>
        new(left._real * right._real - left._imaginary * right._imaginary,
            left._imaginary * right._real + left._real * right._imaginary);

    public override bool Equals(object? obj)
    {
        if (obj == null)
            return false;

        if (obj.GetType() != GetType())
            return false;

        var value = (ComplexNumber)obj;

        return _real == value._real && _imaginary == value._imaginary;
    }

    public override int GetHashCode()
    {
        return HashCode.Combine(_real, _imaginary);
    }

    public override string ToString()
    {
        return $"{_real}i{_imaginary}";
    }
}