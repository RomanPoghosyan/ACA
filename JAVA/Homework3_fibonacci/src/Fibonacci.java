public class Fibonacci {
    static int[] fib(int n){
        int[] result = new int[n - 1];
        result[0] = 1;
        if(n == 1) return result;
        int index = 1;
        int current = 1;
        int last = 0;
        for(int i = 1; i < n - 1; i++){
            int temp = last + current;
            last = current;
            current = temp;
            result[index] = current;
            index++;
        }
        return result;
    }
    public static void main(String args[]){
        for(int x : fib(8)) {
            System.out.println(x);
        }

        System.out.println();

        for(int y : Fib.fibonacci(7)){
            System.out.println(y);
        }
    }
}
