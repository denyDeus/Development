import java.util.Scanner;

public class MainRec {

    public static void main(String[] args) {
        Rectangle[] rectangles = new Rectangle[3];

        Scanner input = new Scanner(System.in);

        for (int i = 0; i < rectangles.length; i++) {
            System.out.println(
                    "DO you want to enter the width and the height? (Y/N)");

            char choice = input.next().charAt(0);

            if(choice == 'Y')
                rectangles[i] = new Rectangle(input.nextDouble(), input.nextDouble());
            else if (choice == 'N')
                rectangles[i] = new Rectangle();
            else {
                System.out.println("Invalid");
                rectangles[i] = new Rectangle();
            }

            System.out.println(
                    "Rectangle" + (i + 1) +
                            ":width:" + rectangles[i].getWidth() +
                            ", height: " + rectangles[i].getHeight());
        }
    }
}
