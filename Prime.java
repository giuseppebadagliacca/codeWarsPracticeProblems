public class Prime {
    public static void main(String[] args) {
        System.out.println(isPrime(0));
        System.out.println(isPrime(3));
    }

    public static boolean isPrime(int num) {
        if (num <= 0 || num == 1) {
            return false;
        }
        for (int i = num - 1; i >= 2; i--) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }

}
