var myNav = document.getElementById("navBar");

window.onscroll = function() {
  myFunction();
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  if (winScroll <= 70) {
    navBar.classList.add("nav-transparent");
    navBar.classList.remove("nav-colored");
  }

  else {
    navBar.classList.add("nav-colored");
    navBar.classList.remove("nav-transparent");
  }
}
