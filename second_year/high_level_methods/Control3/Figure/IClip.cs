namespace Figure;

public interface IClip
{
    public Point Max { get; }
    public Point Min { get; }

    /// <summary>
    /// Ширина облости
    /// </summary>
    public double Width { get; }

    /// <summary>
    /// Высота облости
    /// </summary>
    public double Height { get; }
}