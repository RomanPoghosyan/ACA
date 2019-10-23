public class Palindrome {
    public static void main(String[] args) {
        System.out.println(isPalindrome("no lemon, no melon"));
        System.out.println(isPalindrome("i did, difdefw"));
    }

    /**
     * @Roman
     * @param str any word or sentence
     * @return true if str is equal to it's reverse version otherwise false
     */
    static public boolean isPalindrome(String str)
    {
        StringBuilder strBuilder = new StringBuilder(str.replaceAll("[^a-zA-Z]", ""));
        return strBuilder.toString().equalsIgnoreCase( strBuilder.reverse().toString() );
    }
}
