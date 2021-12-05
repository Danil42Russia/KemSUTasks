package time;

public final class Time extends TimeField {

    /**
     * Часы
     */
    private int hour;

    /**
     * Минуты
     */
    private int minute;

    /**
     * Секунды
     */
    private int second;

    public Time(int hour, int minute, int second) {
        validateHourFiled(hour);
        this.hour =  hour;

        validateMinuteFiled(minute);
        this.minute =  minute;

        validateSecondFiled(second);
        this.second =  second;
    }

    public Time(int hour, int minute) {
        validateHourFiled(hour);
        this.hour = hour;

        validateMinuteFiled(minute);
        this.minute =  minute;

        this.second = 0;
    }

    public Time(int hour) {
        validateHourFiled(hour);
        this.hour =  hour;

        this.minute = 0;
        this.second = 0;
    }

    public Time() {
        this.hour = 0;
        this.minute = 0;
        this.second = 0;
    }


    public int getHour() {
        return hour;
    }

    public int getMinute() {
        return minute;
    }

    public int getSecond() {
        return second;
    }


    public void setHour(int hour) {
        validateHourFiled(hour);
        this.hour =  hour;
    }

    public void setMinute(int minute) {
        validateMinuteFiled(minute);
        this.minute =  minute;
    }

    public void setSecond(int second) {
        validateSecondFiled(second);
        this.second =  second;
    }

    @Override
    public String toString() {
        return (this.hour < 10 ? "0" : "") + this.hour +
            (this.minute < 10 ? ":0" : ":") + this.minute +
            (this.second < 10 ? ":0" : ":") + this.second;
    }
}
