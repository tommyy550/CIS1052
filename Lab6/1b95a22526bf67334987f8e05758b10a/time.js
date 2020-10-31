

function rotateSeconds(){
    let sec = document.querySelector("#second");
    sec.style.transform = "rotate(30deg)";
}

// setInterval(rotateSeconds,100);
let sec=0;
while(sec<60){
    let x = document.querySelector("#second");
    x.style.transform = "rotate("++"deg)";
    sec=sec+6;
}

