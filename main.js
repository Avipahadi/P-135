status = "";
objects = [];
img = "";

function preload() {
  img = loadImage("black.jpeg");
}

function setup() {
  canvas = createCanvas(480, 380);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
}

function draw() {
  image(video, 0, 0, 480, 380);
  if (status != "") {
    objectDetector.detect(video, gotResults);
    for (i = 0; i < objects.length; i++) {
      if (object_name == objects[i].label) {
        speak();
        setTimeout(function () {
          video.stop();
          image(img, 0, 0, 480, 380);
        }, 3000);
        document.getElementById("status").innerHTML = "Status : Objects Detected";
        document.getElementById("no_of_objects").innerHTML = "Number of objects detected are : " + objects.length;
        fill("#ff430f");
        percentage = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percentage + "%", objects[i].x + 15, objects[i].y + 15);
        noFill();
        stroke("#ff430f");
        rect(objects[i].x, objects[i].y, 0, 0);
      }
      document.getElementById("status").innerHTML = "Status : Objects Detected";
      document.getElementById("no_of_objects").innerHTML = "Number of objects detected are : " + objects.length;
      fill("#ff430f");
      percentage = floor(objects[i].confidence * 100);
      text(objects[i].label + " " + percentage + "%", objects[i].x + 15, objects[i].y + 15);
      noFill();
      stroke("#ff430f");
      rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
  }
}

function gotResults(error, results) {
  if (error) {
    console.log(error);
  } else {
    console.log(results);
    objects = results;
  }
}

function start() {
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status: Detecting Objects";
  object_name = document.getElementById("nameofobject").value;
}

object_name = document.getElementById("nameofobject").value;

var synth = window.speechSynthesis;
var utterThis = new SpeechSynthesisUtterance("Object found");

function speak() {
  synth.speak(utterThis);
  setTimeout(function () {
    synth.cancel();
  }, 1500);
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
