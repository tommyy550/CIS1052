function checkAge(){
    const x = document.querySelector("#age");
    let age=x.value;
    if(age>=13){
        const x = document.querySelector("#ageError");
        x.innerHTML="";
        return true;
    }
    else{
        const x = document.querySelector("#ageError");
        x.style.color="red";
        x.innerHTML=" Invalid age."
        return false;
    }
}

function checkFirstName(){
    const x = document.querySelector("#firstName");
    let fName=x.value;
    let error = document.querySelector("#firstNameError");
    error.style.color="red";
    if(fName.includes(" ")){
        error.innerHTML="Cannot have spaces";
        return false;
    }
    else if(!(fName.charAt(0)===fName.charAt(0).toUpperCase())){
        const x = document.querySelector("#firstNameError");
        x.innerHTML="Must start with upper-case letter.";
        return false;
    }
    
    else if(!(fName.substring(1,fName.Length)===fName.substring(1,fName.Length).toLowerCase())){
        const x = document.querySelector("#firstNameError");
        x.innerHTML="Must be all lower-case except first letter.";
        return false;
    }
    else{
        error.innerHTML="";
        return true;
    }
}

function checkLastName(){
    const x = document.querySelector("#lastName");
    let lName=x.value;
    let error = document.querySelector("#lastNameError");
    error.style.color="red";
    if(lName.includes(" ")){
        const x = document.querySelector("#lastNameError");
        x.innerHTML="Cannot have spaces";
        return false;
    }
    else if(!(lName.charAt(0)===lName.charAt(0).toUpperCase())){
        const x = document.querySelector("#lastNameError");
        x.innerHTML="Must start with upper-case letter.";
        return false;
    }
    else if(!(lName.substring(1,lName.Length)===lName.substring(1,lName.Length).toLowerCase())){
        const x = document.querySelector("#lastNameError");
        x.innerHTML="Must be all lower-case except first letter.";
        return false;
    }
    else{
        error.innerHTML="";
        return true;
    }
}

const commonPW=["Password","test"]
function checkPassword(){
    const x = document.querySelector("#password");
    let pw=x.value;
    let error = document.querySelector("#passwordError");
    error.style.color="red";
    if(pw.length<6){
        error.innerHTML="Password must have at least 6 characters."
        return false;
    }
    const z = document.querySelector("#firstName");
    let first=z.value;
    const y = document.querySelector("#lastName");
    let last=y.value;
    
    const passRegex=/^(.)\1+$/;
    if(passRegex.test(pw)){
        error.innerHTML="Password cannot all be same character.";
        return false;
    }

    if(pw.includes(first) || pw.includes(last)){
        error.innerHTML="Password cannot contain first or last name."
        return false;
    }
    const commonPW=["Password","test"]
    for(const pass of commonPW){
        if(pass===pw){
            error.innerHTML="This is too common of a password."
            return false;
        }
    }
    error.innerHTML="";
    return true;
}

function checkPhone(){
    const x = document.querySelector("#phone");
    let phone=x.value;
    const error = document.querySelector("#phoneError");
    error.style.color="red";
    const phoneRegex = /\d{3}-\d{3}-\d{4}(ext\d{4})?/;
    if(phoneRegex.test(phone)){
        error.innerHTML="";
        return true;
    }
    else{
        error.innerHTML="Invalid Phone Number";
    }
}

const takenUserNames=["Tommy","Ryan"]
function checkUserName(){
    const x = document.querySelector("#username");
    let username=x.value;
    let error = document.querySelector("#usernameError");
    error.style.color="red";
    for(const user of takenUserNames){
        if(user===username){
            error.innerHTML="Username taken";
            return false;
        }
    }
    const userNameRegex = /^[A-Za-z][A-Za-z\d]*!?/;
    if(userNameRegex.test(username)){
        error.innerHTML="";
        return true;
    }
    else{
        error.innerHTML="Invalid Username";
        return false;
    }
}


// const phoneRegex = /\d{3}-\d{3}-\d{4}(ext\d{4})?/;
// phoneRegex.test("267.353_4843");
// document.getElementById("test").innerHTML=phoneRegex.test("267.353_48444");
