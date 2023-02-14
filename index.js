function myFunction() {
    var x = document.getElementById("nav-menu");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function Resume() {
    console.log("resume");
}
