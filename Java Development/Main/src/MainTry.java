import static java.io.IO.print;

public class MainTry {

   public static void main(String[] args) {
       String message = "Hello";
       print(message);
       message += "World!";

       print(message);
   }

   static void print(String message) {
       System.out.println(message);
       message += " ";
   }
}
