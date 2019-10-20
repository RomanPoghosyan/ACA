class Fib {
    static private int[] result = {1};
    static private int index = 1;
    static private int last = 1;
    static private int second = 0;
    static int[] fibonacci(int n){
        if(n < 3){
            int[] trimResult = new int[index];
            System.arraycopy(result, 0, trimResult, 0, index);
            return trimResult;
        }
        int i = second;
        second = last;
        last = last + i;
        if(index >= result.length){
            int[] newResult = new int[index * 2];
            System.arraycopy(result, 0, newResult, 0, result.length);
            result = newResult;
        }
        result[index] = last;
        index++;
        return fibonacci(n - 1);
    }
}