namespace Student;

public readonly struct Student
{
    private const uint MaxEvaluationsCount = 5;

    private readonly int[] _evaluations;

    public string Surname { init; get; }
    public string GroupNumber { init; get; }
    public double Average { private init; get; }

    public int[] Evaluations
    {
        init
        {
            if (value.Length == 0)
                throw new ArgumentException("Минимальное количество оценок: 1");

            if (value.Length > MaxEvaluationsCount)
                throw new ArgumentException($"Максимальное количество оценок: {MaxEvaluationsCount}");

            var invalid = value
                .Where(v => v > 5 || v < 1)
                .ToList();
            if (invalid.Count != 0)
                throw new ArgumentException($"Недопустимое значение оценки: {invalid[0]}");

            Average = value.Average();

            _evaluations = value;
        }
        get => _evaluations;
    }

    public override string ToString()
    {
        return
            $"фамилия: {Surname} группа: {GroupNumber} средний балл: {Average:F2} ({string.Join(", ", Evaluations)})";
    }
}