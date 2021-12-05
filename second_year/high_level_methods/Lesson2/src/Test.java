import time.Time;

public class Test {
    public static void main(String[] args) {
        Time time = new Time(10, 20, 30);
        System.out.println(time);

        time.setHour(20);
        System.out.println(time);

        time.setMinute(30);
        System.out.println(time);

        time.setSecond(40);
        System.out.println(time);

        System.out.println(time.getHour() + " " + time.getMinute() + " " + time.getSecond());
    }
}
