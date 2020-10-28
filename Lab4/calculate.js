function calculate(num1, operator, num2) {
    // Do the calculation
    if(operator==="+"){
        return num1+num2;
    }
    else if(operator==="-"){
        return num1-num2;
    }
    else if(operator==="x"){
        return num1*num2;
    }
    else if(operator==="/"){
        return num1/num2;
    }
    else if(operator==="^"){
        return num1**num2;
    }
    else{
        return null;
    }
}