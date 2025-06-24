public class MainAcc {

    public static void main(String[] args) {
        Account testAccount = new Account(1122, 20000, 4.5);
        if (testAccount.withdraw(5000))
            System.out.println("Withdraw Successful");
        else
            System.out.println("Withdraw not Successful");

        testAccount.deposit(3000);
        System.out.println(testAccount.getId() + " " +
                testAccount.getBalance() + " " +
                testAccount.getAnnualInterestRate() + " " +
                testAccount.getDateCreated());
    }
}
