// Start Navbar
// Navbar on scrolling
let navbar = document.querySelector(".navbar");
let scroll_to_top = document.querySelector(".back-to-top");
window.onscroll = function shownavbar() {
  if (window.scrollY > 200) {
    navbar.style.transitionDuration = "0.7s";
    navbar.style.transitionTimingFunction = "liner";
    navbar.style.transitionProperty = "all";
    navbar.style.opacity = "1";
    navbar.style.userSelect = "auto";
    navbar.style.transform = "translateY(0%)";
    // Scroll To Top
    scroll_to_top.style.transitionDuration = "0.7s";
    scroll_to_top.style.transitionTimingFunction = "liner";
    scroll_to_top.style.transitionProperty = "all";
    scroll_to_top.style.opacity = "1";
  } else {
    navbar.style.transitionDuration = "0.7s";
    navbar.style.transitionTimingFunction = "liner";
    navbar.style.transitionProperty = "all";
    navbar.style.opacity = "0";
    navbar.style.userSelect = "none";
    navbar.style.transform = "translateY(-100%)";
    // Scroll To Top
    scroll_to_top.style.transitionDuration = "0.7s";
    scroll_to_top.style.transitionTimingFunction = "liner";
    scroll_to_top.style.transitionProperty = "all";
    scroll_to_top.style.opacity = "0";
  }
};
// End Navbar
// Start Alert
let alert = document.querySelector(".alert");
window.onload = function () {
  alert.style.userSelect = "none";
  alert.style.transitionDuration = "0.7s";
  alert.style.transitionTimingFunction = "ease-in";
  alert.style.opacity = "0.9";
  alert.style.transform = "translatex(0%)";
  function hide_alert() {
    alert.style.transitionDuration = "0.7s";
    alert.style.transitionTimingFunction = "ease-out";
    alert.style.userSelect = "none";
    alert.style.transform = "translatex(100%)";
    alert.style.opacity = "0";
  }
  setTimeout(hide_alert, 3500);
};
// End Alert

// Start Text Animation
document.addEventListener("DOMContentLoaded", function () {
  // Wait for the DOM content to be fully loaded
  var typedTextOutput = document.getElementById("typed-text-output");
  var typedText = document.getElementById("typed-text");

  if (typedTextOutput && typedText) {
    // If the elements are found
    var words = typedText.textContent.split(", "); // Split text into individual words
    var currentWordIndex = 0;
    var currentLetterIndex = 0;

    function displayNextLetter() {
      var currentWord = words[currentWordIndex];
      if (currentLetterIndex < currentWord.length) {
        typedTextOutput.textContent += currentWord[currentLetterIndex];
        currentLetterIndex++;
        setTimeout(displayNextLetter, 100); // Set timeout to display the next letter after 100 milliseconds
      } else {
        // If all letters of the current word are displayed, move to the next word
        typedTextOutput.style.transition = "opacity 0.3s"; // Apply transition effect
        setTimeout(function () {
          typedTextOutput.textContent = ""; // Clear the output
          typedTextOutput.style.transition = "none"; // Remove transition effect temporarily to reset position
          currentWordIndex = (currentWordIndex + 1) % words.length; // Move to the next word (looping back to the beginning if necessary)
          currentLetterIndex = 0; // Reset the letter index for the new word
          displayNextLetter(); // Display the next word
        }, 1500); // Set timeout to start displaying the next word after 0.3 second transition
      }
    }

    // Start displaying letters
    displayNextLetter();
  }
});

// End Text Animation
// Start Date CopyRight
var date_copy = document.getElementById("date_copy");
const y = new Date();
date_copy.textContent = y.getFullYear();
// End Date CopyRight
