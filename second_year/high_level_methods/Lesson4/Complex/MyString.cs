namespace Complex;

public class MyString
{
    private int _lenght;
    private string _str;

    public MyString()
    {
        _str = "";
        _lenght = _str.Length;
    }

    public MyString(string str)
    {
        _str = str;
        _lenght = _str.Length;
    }

    public MyString(char chr)
    {
        _str = chr.ToString();
        _lenght = _str.Length;
    }

    public int Lenght => _lenght;

    public void Clear()
    {
        _str = String.Empty;
        _lenght = 0;
    }

    public override bool Equals(object? obj)
    {
        if (obj == null)
            return false;

        if (obj.GetType() != GetType())
            return false;

        var str = (MyString)obj;

        return str._lenght == _lenght && str._str == _str;
    }

    public override int GetHashCode()
    {
        return HashCode.Combine(_lenght, _str);
    }

    public override string ToString()
    {
        return _str;
    }
}