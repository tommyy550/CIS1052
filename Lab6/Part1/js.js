function sevenInFinal(num){
    let lastDigit=num%10;
    return lastDigit===7;
}

function toUpperCase(str){
    return str.toUpperCase();
}

function lengthOfPalindrome(str){
    return str.length;
}

function isPalindrome(str){
    var newString = "";
    for (i = str.length - 1; i >= 0; i--) { 
        newString += str[i];
    }
    return str===newString;
}

function sevenInFinal2(arr){
    return arr.filter(sevenInFinal);
}

function toUpperCase2(arr){
    return arr.map(toUpperCase);
}

function lengthOfPalindrome2(arr){
    newArr=arr.filter(isPalindrome);
    return newArr.map(lengthOfPalindrome);
}