/* for the burger menu. To display the navigation */
function myFunctionBurger() {
    var x = document.getElementById("menu");
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
}

/* To display the price and details of the beginner course*/
function myFunctionBeginner() {
  var x = document.getElementById("beginner-details");
  if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}

/* To display the price and details of the Intermediate course*/
function myFunctionIntermediate() {
  var x = document.getElementById("intermediate-details");
  if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}

/* To display the price and details of the workshops and go to the div that displays information*/
function myFunctionWorkshop() {
  var x = document.getElementById("workshops-details");
  if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
    location.href="#workshops-details";
}