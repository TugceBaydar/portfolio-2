function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "classnav") {
        x.className += " responsive";
    } else {
        x.className = "classnav";
    }
}
