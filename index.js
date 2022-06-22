// jshint esversion:6

let output = document.getElementById("display");

// Clear
function allclear() {
  output.value = "";
  var buttonPressed = document.querySelector(".clear");
  (buttonPressed).classList.add("pressed");

  setTimeout(function() {
    (buttonPressed).classList.remove("pressed");
  }, 100);
}

// Backspace
function backspace() {
  output.value = output.value.slice(0,-1);
  var buttonPressed = document.querySelector(".backspace");
  (buttonPressed).classList.add("pressed");

  setTimeout(function() {
    (buttonPressed).classList.remove("pressed");
  }, 100);
}

function numbers(num) {
  output.value = output.value + num;

  // Addition
  if (num === '+') {
    var buttonPressed = document.querySelector(".addition");
    (buttonPressed).classList.add("pressed");

    setTimeout(function() {
      (buttonPressed).classList.remove("pressed");
    }, 100);
  }

  // Subtract
  else if (num === '-') {
    var buttonPressed = document.querySelector(".subtract");
    (buttonPressed).classList.add("pressed");

    setTimeout(function() {
      (buttonPressed).classList.remove("pressed");
    }, 100);
  }

  // Multiply
  else if (num === '*') {
    var buttonPressed = document.querySelector(".multiply");
    (buttonPressed).classList.add("pressed");

    setTimeout(function() {
      (buttonPressed).classList.remove("pressed");
    }, 100);
  }

  // Divide
  else if (num === '/') {
    var buttonPressed = document.querySelector(".divide");
    (buttonPressed).classList.add("pressed");

    setTimeout(function() {
      (buttonPressed).classList.remove("pressed");
    }, 100);
  }

  // Percentage
  else if (num === '%') {
    var buttonPressed = document.querySelector(".percentage");
    (buttonPressed).classList.add("pressed");

    setTimeout(function() {
      (buttonPressed).classList.remove("pressed");
    }, 100);
  }

  // Dot
  else if (num === '.') {
    var buttonPressed = document.querySelector(".dot");
    (buttonPressed).classList.add("pressed");

    setTimeout(function() {
      (buttonPressed).classList.remove("pressed");
    }, 100);
  }

  // Numbers
  else {
    var buttonPressed = document.querySelector(".num-" + num);
    (buttonPressed).classList.add("pressed");

    setTimeout(function() {
      (buttonPressed).classList.remove("pressed");
    }, 100);
  }
}

// Equals
function equals() {
  output.value = eval(output.value);
  var buttonPressed = document.querySelector(".is-equals-to");
  (buttonPressed).classList.add("pressed");

  setTimeout(function() {
    (buttonPressed).classList.remove("pressed");
  }, 100);
}
