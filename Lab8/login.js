

// function createUser(){
//     fetch("https://spy-notes-api.rk0.xyz/users/",{method: "POST"})
//     .then(resp=>resp.json())
//     .then(data=>{
//         console.log(data.userId);
//         // window.history.pushState('userID=' + data.userId, 'userID', '?userID=' + data.userId); //adds url parameter
//          window.location.href = 'index.html?userID='+data.userId; 
//     })  
// }

function login(){
    var user = document.querySelector("#userID");
    window.location.href = 'index.html?userID='+user.value;
}

function register(){
    fetch("https://spy-notes-api.rk0.xyz/users/",{method: "POST"})
    .then(resp=>resp.json())
    .then(data=>{
        var x = document.querySelector("#credentials");
        x.innerHTML+="Your user ID is " + "<strong>"+data.userId+"</strong>. Please save it somewhere safe as you will use it to login.";
    })
}



// deleteNote("9ddf020f-214b-4ddd-9527-0ec642ac8d6b","9e6117cd-9b5f-4a27-8575-99fe7c2c3c40")
//  createNote("9ddf020f-214b-4ddd-9527-0ec642ac8d6b");
//  getNotes("9ddf020f-214b-4ddd-9527-0ec642ac8d6b");