package Greet;

class Greet {
    static String greet(String name, String owner) {
        if (name.equals(owner)) {
            return "Hello boss";
        } else {
            return "Hello guest";
        }
    }

    public static void main(String[] args) {
        System.out.println(greet("John", "John"));
        ;
    }
}