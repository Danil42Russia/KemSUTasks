namespace Figure;

public struct Point
{
    public static readonly Point Empty;

    private double _x;
    private double _y;

    public Point(double x, double y)
    {
        _x = Math.Round(x, 1);
        _y = Math.Round(y, 1);
    }

    public double X
    {
        readonly get => _x;
        set => _x = value;
    }

    public double Y
    {
        readonly get => _y;
        set => _y = value;
    }

    public readonly override string ToString() => $"{{X={_x}, Y={_y}}}";
}