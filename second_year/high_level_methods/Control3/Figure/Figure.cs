namespace Figure;

public abstract class Figure : IFigure
{
    /// <summary>
    /// Центр фигуры
    /// </summary>
    protected Point _median;

    public Point Median => _median;

    public abstract double Area { get; }

    public abstract double Perimeter { get; }

    public abstract Clip GetClipBox { get; }
}