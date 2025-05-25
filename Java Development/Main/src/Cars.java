public class Cars {

    String type = "Toyota";
    String model = "Rav 4";
    String color = "Black";
    int speed = 0;

    void describe() {
        System.out.println("Car type: " + type);
        System.out.println("Car model: " + model);
        System.out.println("Car color: " + color);
    }

    int increaseSpeed(int increment) {
        this.speed = this.speed + increment;
        System.out.println("New speed is: " + this.speed);
        return this.speed;
    }
}
