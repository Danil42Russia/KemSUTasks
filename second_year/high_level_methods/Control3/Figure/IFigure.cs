namespace Figure;

public interface IFigure
{
    /// <summary>
    /// Центр фигуры
    /// </summary>
    public Point Median { get; }

    /// <summary>
    /// Расчёт площади
    /// </summary>
    public double Area { get; }

    /// <summary>
    /// Расчёт периметра
    /// </summary>
    public double Perimeter { get; }

    public Clip GetClipBox { get; }
}