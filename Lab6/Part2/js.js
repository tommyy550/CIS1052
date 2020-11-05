function separate(arr,func){
    let arrTrue=[];
    let arrFalse=[];
    for(const element of arr){
        if(func(element)){
            arrTrue.push(element);
        }
        else{
            arrFalse.push(element);
        }
    }
    let retval=[];
    retval.push(arrTrue);
    retval.push(arrFalse);
    return retval;
}

function isEven(num){
    if(num%2===0){
        return true;
    }
    else{
        return false;
    }
}

separate([1,2,3,4,5,6], isEven)

function bestOfBothWorlds(arr1,arr2,func){
    let retval=[];
    for(let i=0;i<arr1.length;i++){
        retval.push(func(arr1[i],arr2[i]))
    }
    return retval;
}

function biggerIsBetter(num1,num2){
    if (num1>num2){
        return num1;
    }
    return num2;
}

bestOfBothWorlds([1,11,2], [15, 7, 5], biggerIsBetter)