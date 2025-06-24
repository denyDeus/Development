public class MainClie {

    public static void main(String[] args) {
        Client[] clients = new Client[2];

        clients[0] = new Client(100, "Stella", "0787711413");
        clients[0].addAccount(new Account(11, 10000, 2.5));
        clients[0].addAccount(new Account(13, 100000, 4));

        clients[1] = new Client(156, "Denis", "0772263871");
        clients[1].addAccount(new Account(3, 1000000, 4));
        clients[1].addAccount(new Account(6, 10000000, 4.5));
        clients[1].addAccount(new Account(9, 100000000, 5));

        System.out.println(clients[0].toString());
        System.out.println(clients[1].toString());
    }
}
