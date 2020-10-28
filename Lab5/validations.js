function checkAge(age){
    if(age>=13){
        return true;
    }
    else{
        return false;
    }
}

function checkName(name){
    if(name.includes(" ")){
        return false;
    }
    else if(!(name.charAt(0)===name.charAt(0).toUpperCase())){
        return false;
    }
    else if(!(name.substring(1,name.Length)===name.substring(1,name.Length).toLowerCase())){
        return false;
    }
    else{
        return true;
    }
}

function checkPassword(pw,firstName,lastName,commonPW){
    if(pw.length<6){
        return false;
    }
    if( pw.includes(firstName)|| pw.includes(lastName)){
        return false;
    }
    const passRegex=/^(.)\1+$/;
    if(passRegex.test(pw)){
        return false;
    }

    for(const pass of commonPW){
        if(pass===pw){
            return false;
        }
    }
    return true;
}

function checkPhone(phone){
    const phoneRegex = /\d{3}-\d{3}-\d{4}(ext\d{4})?/;
    return phoneRegex.test(phone);
}

function checkUserName(username,takenUserNames){
    for(const user of takenUserNames){
        if(user===username){
            return false;
        }
    }
    const userNameRegex = /^[A-Za-z][A-Za-z\d]*!?/;
    return userNameRegex.test(username);
}


// const phoneRegex = /\d{3}-\d{3}-\d{4}(ext\d{4})?/;
// phoneRegex.test("267.353_4843");
// document.getElementById("test").innerHTML=phoneRegex.test("267.353_48444");
