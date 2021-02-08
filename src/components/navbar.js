import React from "react";

function Navbar(props) {
  return (
    <div class="w3-top">
      <div class="w3-bar" id="myNavbar">
        <a class="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right"
          href="javascript:void(0);" onclick="toggleFunction()" title="Toggle Navigation Menu">
          <i class="fa fa-bars"></i>
        </a>
        <a href="#home" class="w3-bar-item w3-button" color="white">HOME</a>
        <a href="#about" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-bullhorn"></i> ABOUT</a>
        <a href="#contact" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-envelope"></i> CONTACT</a>
        <a href="#builder" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-tools"></i> BUILDER</a>
        <a href="#" class="w3-bar-item w3-button w3-hide-small w3-right w3-hover-red">
          <i class="fa fa-search"></i>
        </a>
      </div>

      <div id="navDemo" class="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium">
        <a href="#about" class="w3-bar-item w3-button" onclick="toggleFunction()">ABOUT</a>
        <a href="#contact" class="w3-bar-item w3-button" onclick="toggleFunction()">CONTACT</a>
        <a href="#builder" class="w3-bar-item w3-button" onclick="toggleFunction()"> BUILDER</a>
        <a href="#" class="w3-bar-item w3-button">SEARCH</a>
      </div>
    </div>
  );

  // Change style of navbar on scroll
  window.onscroll = function () { myFunction() };
  function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
      navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
  }

  // Used to toggle the menu on small screens when clicking on the menu button
  function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else {
      x.className = x.className.replace(" w3-show", "");
    }
  }
}

export default Navbar;
