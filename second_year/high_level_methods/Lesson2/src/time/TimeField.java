package time;

public class TimeField {

    protected static void validateHourFiled(int hour) {
        if (hour < 0 || hour > 23) {
            throw new TimeException("Недопустимое значение часа: " + hour + " (допустимое 0 - 23)");
        }
    }

    protected static void validateMinuteFiled(int minute) {
        if (minute < 0 || minute > 59) {
            throw new TimeException("Недопустимое значение минут: " + minute + " (допустимое 0 - 59)");
        }
    }

    protected static void validateSecondFiled(int second) {
        if (second < 0 || second > 59) {
            throw new TimeException("Недопустимое значение секунд: " + second + " (допустимое 0 - 59)");
        }
    }

}
