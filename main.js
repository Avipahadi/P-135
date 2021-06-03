var click = 1;

function s_h() {
    if (click == 1) {
        document.getElementById("hint").style.display = "block";
        document.getElementById("click").value = "Hide object names";
        click -= 1;
    } else {
        document.getElementById("hint").style.display = "none";
        document.getElementById("click").value = "Show object names";
        click += 1;
    }
}

function myFunction(event) {
    var x = event.which || event.keyCode;
    if (x == 47) {
        document.getElementById("nameofobject").focus();
        document.getElementById("nameofobject").value = "";
    }
}

document.addEventListener('contextmenu', event => event.preventDefault());

function myalert() {
    document.getElementById("alert").style.display = "block";
    setTimeout(function () {
        document.getElementById("alert").style.display = "none";
    }, 5000);
}