namespace DateInterval;

public sealed class DateInterval
{
    private const int DaysPerYear = 365;
    private const int HoursPerDay = 24;
    private const int HoursPerYear = DaysPerYear * HoursPerDay;

    private const int MaxInputYears = 99;
    private const int MaxInputDays = DaysPerYear - 1;
    private const int MaxInputHours = HoursPerDay - 1;
    private const int MaxHoursPerYear = MaxInputYears * HoursPerYear + MaxInputDays * HoursPerDay + MaxInputHours;

    private readonly long _hours;

    public DateInterval(int hour = 0, int day = 0, int year = 0)
    {
        _hours = DateToHours(hour, day, year);
    }

    /// <remarks>При переполнение, устанавливает значение в 0</remarks>
    private DateInterval(long hour)
    {
        if (hour < 0 || hour > MaxHoursPerYear)
            hour = 0;

        _hours = hour;
    }

    private static long DateToHours(int hour, int day, int year)
    {
        if (hour < 0 || hour > MaxInputHours)
            throw new ArgumentOutOfRangeException(
                $"Недопустимое значение часов: {hour} (допустимое 0 - {MaxInputHours})");

        if (day < 0 || day > MaxInputDays)
            throw new ArgumentOutOfRangeException(
                $"Недопустимое значение дней: {day} (допустимое 0 - {MaxInputDays})");

        if (year < 0 || year > MaxInputYears)
            throw new ArgumentOutOfRangeException(
                $"Недопустимое значение столетий: {year} (допустимое 0 - {MaxInputYears})");

        return year * HoursPerYear + day * HoursPerDay + hour;
    }

    public int Hour => (int)(_hours % HoursPerDay);

    public int Day => (int)((_hours - Year * HoursPerYear - Hour) / HoursPerDay);

    public int Year => (int)(_hours / HoursPerYear);

    /// <summary>
    /// Сложение
    /// </summary>
    public static DateInterval operator +(DateInterval left, DateInterval right) =>
        new(left._hours + right._hours);

    /// <summary>
    /// Вычитание
    /// </summary>
    public static DateInterval operator -(DateInterval left, DateInterval right) =>
        new(left._hours - right._hours);

    /// <summary>
    /// Удлинение или сокращение
    /// </summary>
    public static DateInterval operator *(DateInterval left, int factor) =>
        new(left._hours * factor);

    /// <summary>
    /// Дополнение до конца столетия
    /// </summary>
    public static DateInterval operator ~(DateInterval left) =>
        new(MaxInputHours, MaxInputDays, MaxInputYears);

    /// <summary>
    /// Преобразование в часы
    /// </summary>
    public static explicit operator long(DateInterval left) =>
        left._hours;

    /// <summary>
    /// Преобразование в года
    /// </summary>
    public static explicit operator float(DateInterval left) =>
        left._hours / (float)HoursPerYear;

    /// <summary>
    /// Проверка на ноль 
    /// </summary>
    public static bool operator !(DateInterval left) =>
        left._hours == 0;

    /// <summary>
    /// Сравнение
    /// </summary>
    public static bool operator ==(DateInterval left, DateInterval right) =>
        left.Equals(right);

    /// <summary>
    /// Сравнение
    /// </summary>
    public static bool operator !=(DateInterval left, DateInterval right) =>
        !(left == right);

    public override bool Equals(object? obj)
    {
        if (obj?.GetType() != GetType())
            return false;

        var right = (DateInterval)obj;

        return _hours == right._hours;
    }

    public override int GetHashCode() => HashCode.Combine(_hours);

    public override string ToString() => $"{Hour:D2}-{Day:D3}-{Year:D2}";
}