function isPalindrome(str) {
    // Determine if the string is a palindrome
    var newString = "";
    for (i = str.length - 1; i >= 0; i--) { 
        newString += str[i];
    }
    return str===newString;
}