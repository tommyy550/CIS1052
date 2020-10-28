function sumOfPrimes(numbers) {
    // Find the sum. Maybe call isPrime somewhere to help
    var sum=0;
    for(var i = 0; i < numbers.length; i++){
        if(isPrime(numbers[i])){
            sum = sum + numbers[i];
        } 
    }
    return sum;
}

function isPrime(num) {
    if(num===1){
        return false;
    }
    for(var i=2;i<num;i++){
        if(num%i===0){
            return false;
        }
    }
    return true;
}