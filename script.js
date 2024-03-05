function bright() {
    var u = document.getElementById("brightness").value;
    var image = document.getElementById("image");
    image.style.filter = "brightness(" + u + "%)";
}

function con() {
    var u = document.getElementById("contrast").value;
    var image = document.getElementById("image");
    image.style.filter = "contrast(" + u + "%)";
}

function vac() {
    var u = document.getElementById("sat").value;
    var image = document.getElementById("image");
    image.style.filter = "saturate(" + u + "%)";
}