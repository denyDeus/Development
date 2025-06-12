public class CarTest {

    public static void main(String[] args) {
        Cars rav4 = new Cars( );

       rav4.describe();
       System.out.println( "car type is  " +rav4.type);
       System.out.println("color of car is " +rav4.color);
       rav4.setColor();

      rav4.increaseSpeed(50);

    }
}
