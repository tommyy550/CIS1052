function login() {
  var user = document.querySelector("#userID");
  window.location.href = 'index.html?userID=' + user.value;
}

function register() {
  fetch("https://spy-notes-api.rk0.xyz/users/", { method: "POST" })
    .then(resp => resp.json())
    .then(data => {
      var x = document.querySelector("#credentials");
      x.innerHTML += "Your user ID is " + "<strong>" + data.userId + "</strong>. Please save it somewhere safe as you will use it to login.";
    })
}

function qrcode() {
  var video = document.createElement("video");
  var canvasElement = document.getElementById("canvas");
  var canvas = canvasElement.getContext("2d");


  // Use facingMode: environment to attemt to get the front camera on phones
  navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } }).then(function (stream) {
    video.srcObject = stream;
    video.setAttribute("playsinline", true); // required to tell iOS safari we don't want fullscreen
    video.play();
    requestAnimationFrame(tick);
  });

  function tick() {
    if (video.readyState === video.HAVE_ENOUGH_DATA) {
      canvasElement.hidden = false;


      canvasElement.height = video.videoHeight;
      canvasElement.width = video.videoWidth;
      canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);
      var imageData = canvas.getImageData(0, 0, canvasElement.width, canvasElement.height);
      var code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: "dontInvert",
      });
      if (code) {
        // console.log(code.data);
        window.location.href = 'index.html?userID=' + code.data;
      }
    }
    requestAnimationFrame(tick);
  }
}
