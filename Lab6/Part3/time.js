function doInitial(){
    var date = new Date;
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hours = date.getHours()%12;

    console.log("sseconds"+seconds+"minutes"+minutes+"hours"+hours);

    let sec = document.querySelector("#second");
    sec.style.transform = "rotate("+ 6*seconds +"deg)";
    secDegree=6*seconds;

    let min = document.querySelector("#minute");
    //the minute hand should move 360/(60*60) degrees per second
    minDegree=(360/(60*60))*(60*minutes+seconds);
    min.style.transform = "rotate("+ minDegree +"deg)";
    

    let hr = document.querySelector("#hour");
    //the hour hand should move 360/(3600*12) degrees per second
    hrDegree=(360/(3600*12))*(hours*3600+seconds+minutes*60);
    hr.style.transform = "rotate("+  hrDegree +"deg)";
    
}

function rotateSeconds(){
    secDegree+=6;
    let sec = document.querySelector("#second");
    sec.style.transform = "rotate("+ secDegree +"deg)";
}

function rotateMinutes(){
    minDegree+=360/(60*60);
    let min = document.querySelector("#minute");
    min.style.transform = "rotate("+ minDegree +"deg)";
}

function rotateHours(){
    hrDegree+=360/(3600*12);
    let hr = document.querySelector("#hour");
    hr.style.transform = "rotate("+ hrDegree +"deg)";
}


let secDegree=0;
let minDegree=0;
let hrDegree=0;
doInitial();
setInterval(rotateSeconds,1000);
setInterval(rotateMinutes,1000);
setInterval(rotateHours,1000);
// console.log(secDegree);
// console.log(minDegree);
// console.log(hrDegree);





