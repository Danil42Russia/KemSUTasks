namespace Figure;

public sealed class Clip : IClip
{
    public Point Max { get; }
    public Point Min { get; }

    public double Width => Max.X - Min.X;
    public double Height => Max.Y - Min.Y;

    public Clip(Point min, Point max)
    {
        Min = min;
        Max = max;
    }
}