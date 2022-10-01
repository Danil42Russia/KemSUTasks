namespace Figure;

/// <summary>
/// <a href="https://ru.wikipedia.org/wiki/Правильный_шестиугольник">Правильный шестиугольник</a>
/// Правильный шестиугольник
/// </summary>
public sealed class RegularHexagon : Figure
{
    /// <summary>
    /// Радиус описанной окружности
    /// </summary>
    /// <remarks>Обозначем как <b>R</b></remarks>
    private readonly double _radiusСircumcircle;

    /// <summary>
    /// Радиус вписанной окружности
    /// </summary>
    /// <remarks>Обозначем как <b>r</b></remarks>
    private readonly double _radiusIncircle;

    /// <summary>
    /// Длина стороны
    /// </summary>
    /// <remarks>Обозначем как <b>t</b></remarks>
    private readonly double _sideLength;

    public RegularHexagon(double sideLength = 0, Point? median = null)
    {
        _median = median ?? Point.Empty;
        _sideLength = Math.Round(sideLength, 4);

        _radiusСircumcircle = _sideLength;
        _radiusIncircle = CalculationRadiusIncircle();
    }

    /// <summary>
    /// Рачёт радиуса вписанной окружности
    /// </summary>
    /// <remarks>Высчитываем по формуле: <b>sqrt(3) / 2 * R</b></remarks>
    private double CalculationRadiusIncircle()
    {
        return Math.Round(Math.Sqrt(3) / 2 * _radiusСircumcircle, 4);
    }

    /// <summary>
    /// Радиус описанной окружности
    /// </summary>
    /// <remarks>Обозначем как <b>R</b></remarks>
    public double RadiusСircumcircle => _radiusСircumcircle;

    /// <summary>
    /// Радиус вписанной окружности
    /// </summary>
    /// <remarks>Обозначем как <b>r</b></remarks>
    public double RadiusIncircle => _radiusIncircle;

    /// <summary>
    /// Длина стороны
    /// </summary>
    /// <remarks>Обозначем как <b>t</b></remarks>
    public double SideLength => _sideLength;

    /// <summary>
    /// Расчёт площади
    /// </summary>
    /// <remarks>Высчитываем по формуле: <b>2 * sqrt(3) * R^2</b></remarks>
    public override double Area => Math.Round(2 * Math.Sqrt(3) * Math.Pow(_radiusIncircle, 2), 4);

    /// <summary>
    /// Расчёт периметра
    /// </summary>
    /// <remarks>Высчитываем по формуле: <b>6 * R</b></remarks>
    public override double Perimeter => 6 * _radiusСircumcircle;

    public override Clip GetClipBox
    {
        get
        {
            var mix = new Point(_median.X - _radiusСircumcircle, _median.Y - _radiusIncircle);
            var max = new Point(_median.X + _radiusСircumcircle, _median.Y + _radiusIncircle);

            return new Clip(mix, max);
        }
    }
}