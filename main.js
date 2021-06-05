var click = 1;

function setup() {
  canvas = createCanvas(480, 380);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
}

function draw() {
  image(video, 0, 0, 480, 380);
}

function start() {
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status: Detecting Objects";
  object_name = document.getElementById("nameofobject").value;
}

function modelLoaded() {
  console.log("Model Loaded!");
  status = true;
}

function myFunction(event) {
    var x = event.which || event.keyCode;
    if (x == 47) {
        document.getElementById("nameofobject").focus();
        document.getElementById("nameofobject").innerHTML = "";
        document.getElementById("nameofobject").value = "";

    }
}

function myalert() {
    document.getElementById("alert").style.display = "none";
    setTimeout(function () {
        document.getElementById("alert").style.display = "none";
    }, 5000);
}
