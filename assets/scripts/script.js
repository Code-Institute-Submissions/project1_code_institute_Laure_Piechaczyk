/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunctionBurger() {
    var x = document.getElementById("menu");
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    }

function myFunctionBeginner() {
  var x = document.getElementById("beginner-details");
  if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

function myFunctionIntermediate() {
  var x = document.getElementById("intermediate-details");
  if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

function myFunctionWorkshop() {
  var x = document.getElementById("worshops-details");
  if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
    location.href="#worshops-details";
  }