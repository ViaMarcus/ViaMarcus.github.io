window.onscroll = function() {stickyNavBar()}

var navbar = document.getElementById("herpes");
var topDist = navbar.offsetTop;



function stickyNavBar() {
    
    if (window.pageYOffset >= topDist) {
        navbar.classList.add("sticky");
        document.title = "Stuck!";
    } else {
        navbar.classList.remove("sticky");
        document.title = "Not stuck!";
    }
}