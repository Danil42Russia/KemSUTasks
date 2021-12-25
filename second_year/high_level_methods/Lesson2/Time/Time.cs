namespace Time;

public sealed class Time
{
    private int _second;
    private int _minute;
    private int _hour;

    public Time(int hour = 0, int minute = 0, int second = 0)
    {
        Hour = hour;
        Minute = minute;
        Second = second;
    }

    public int Second
    {
        get => _second;
        set
        {
            if (value < 0 || value > 59)
            {
                throw new ArgumentOutOfRangeException("Недопустимое значение секунд: " + value +
                                                      " (допустимое 0 - 59)");
            }

            _second = value;
        }
    }

    public int Minute
    {
        get => _minute;
        set
        {
            if (value < 0 || value > 59)
            {
                throw new ArgumentOutOfRangeException("Недопустимое значение минут: " + value +
                                                      " (допустимое 0 - 59)");
            }

            _minute = value;
        }
    }

    public int Hour
    {
        get => _hour;
        set
        {
            if (value < 0 || value > 23)
            {
                throw new ArgumentOutOfRangeException("Недопустимое значение часа: " + value +
                                                      " (допустимое 0 - 23)");
            }

            _hour = value;
        }
    }

    public override string ToString()
    {
        return $"{_hour:D2}:{_minute:D2}:{_second:D2}";
    }
}