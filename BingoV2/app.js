// Array to store picked numbers
var pickedNumbers = [];
var MaxNumber = 0;
var numberDisplay = document.getElementById("number-display");
var drums = document.getElementById("audioDrums");
var pop = document.getElementById("audioPop");
var isClickable = false;
var roll = document.querySelector("#buzzer");
var rules = document.getElementById("rules");
var runningNumber = document.getElementById("runningNumber");
var rotateIcon = document.querySelector(".fa-arrows-rotate");
var muteIcon = document.querySelector("#mute");
var overlay = document.querySelector("#overlay");
var bingo = document.querySelector("#bingo");
var numberList = document.getElementById("number-list");

//mute and reset mouse hover
rotateIcon.addEventListener("mouseover", function () {
  rotateIcon.classList.add("fa-spin");
});
rotateIcon.addEventListener("mouseout", function () {
  rotateIcon.classList.remove("fa-spin");
});
muteIcon.addEventListener("mouseover", function () {
  muteIcon.classList.add("fa-beat");
});
muteIcon.addEventListener("mouseout", function () {
  muteIcon.classList.remove("fa-beat");
});

roll.classList.add("roll-btn-hide");
function startGame() {
  isClickable = true;
  MaxNumber = document.getElementById("max").value;
  for (let i = 1; i < parseInt(MaxNumber) + 1; i++) {
    var numberElement = document.createElement("div");
    numberElement.className = "number";
    numberElement.textContent = i;
    numberList.appendChild(numberElement);
  }
  rules.classList.add("roll-btn-hide");
  roll.classList.remove("roll-btn-hide");
  roll.classList.add("roll-btn-show");
}
// Generate a random number between 1 and MaxNumber
function generateRandomNumber() {
  return Math.floor(Math.random() * MaxNumber) + 1;
}

// Generate a new number and display it
function generateNumber() {
  if (!isClickable) {
    return;
  }
  isClickable = false;
  drums.play();

  roll.src = "images/BTNPRESSED.png";
  document.querySelector("*").style.cursor = "wait";
  numberDisplay.classList.add("show");
  document.querySelector("#reset").disabled = true;
  // Check if all numbers have been picked

  // Disable generate number button during animation
  var generateButton = document.querySelector("button");
  generateButton.disabled = true;

  // Start displaying random numbers
  var startTime = Date.now();
  var interval = setInterval(function () {
    // Generate a new random number
    var number = generateRandomNumber();

    // Check if the number has already been picked
    // if (pickedNumbers.includes(number)) {          // maybe will returne
    //   return;
    // }
    // Display the number
    runningNumber.textContent = number;
  }, 70); // Display a new number every x second
  // Stop displaying random numbers after 5 seconds
  setTimeout(function () {
    clearInterval(interval);

    // Generate a new number

    var number = generateRandomNumber();

    // Check if the number has already been picked
    while (pickedNumbers.includes(number)) {
      number = generateRandomNumber();
      // generateNumber(); // Generate another number if already picked
      // return;
    }
    if (pickedNumbers.length === MaxNumber - 1) {
      isClickable = false;
      roll.classList.remove("roll-btn-show");
      roll.classList.add("roll-btn-hide");
      document.querySelector("#reset").disabled = false;
      document.querySelector("*").style.cursor = "default";
      alert("All numbers have been picked!");
    }
    // Add the number to the picked numbers array
    pickedNumbers.push(number);
    runningNumber.textContent = number;
    var pickedNumber = document.querySelectorAll(".number");
    pickedNumber[number - 1].classList.add("selected");
    // Enable generate number button after displaying chosen number
    generateButton.disabled = false;
    document.querySelector("#reset").disabled = false;
    numberDisplay.classList.remove("show");
    pop.play();
    roll.src = "images/BTN.png";
    document.querySelector("*").style.cursor = "default";
    isClickable = true;
  }, 5000);

}

function resetGame() {
  roll.classList.add("roll-btn-hide");
  rules.classList.remove("roll-btn-hide");
  rules.classList.add("roll-btn-show");
  overlay.classList.remove("active");
  pickedNumbers = [];
  runningNumber.textContent = "";
  clearNumList();
  isClickable = false;
  console.log("Reset Complete")
}

function clearNumList() {
  var numberList = document.getElementById("number-list");
  var elements = numberList.getElementsByClassName("number");

  while (elements[0]) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}

document.addEventListener("keydown", function (event) {
  if (event.code === "KeyW") {
    overlay.classList.add("active");
    bingo.classList.remove("scale-active");
    setTimeout(function () {
      bingo.classList.add("scale-active");
    }, 10);
  }
});

document.addEventListener("keydown", function (event) {
  if (!isClickable) {
    return;
  }
  if (event.code === "Space") {
    generateNumber()
  }
});
document.addEventListener("keydown", function (event) {
  if (event.code === "Escape") {
    overlay.classList.remove("active");
    bingo.classList.remove("scale-active");
    setTimeout(function () {
      bingo.classList.add("scale-active");
    }, 10);
  }
});
var mutebtn = document.getElementById("mute");
function mute() {
  drums.muted = !drums.muted;
  pop.muted = !pop.muted;

  if (drums.muted && pop.muted) {
    mutebtn.classList.replace("fa-volume-high", "fa-volume-xmark");
  } else {
    mutebtn.classList.replace("fa-volume-xmark", "fa-volume-high");
  }
}
// cursor animation
// // create instance of kinet with custom settings
// var kinet = new Kinet({
//   acceleration: 0.1,
//   friction: 0.15,
//   names: ["x", "y"],
// });

// // set handler on kinet tick event
// var circle = document.getElementById("circle");
// kinet.on("tick", function (instances) {
//   circle.style.transform = `translate3d(${instances.x.current}px, ${instances.y.current
//     }px, 0) rotateX(${instances.x.velocity / 2}deg) rotateY(${instances.y.velocity / 2
//     }deg)`;
// });

// // call kinet animate method on mousemove
// document.addEventListener("mousemove", function (event) {
//   kinet.animate("x", event.clientX - window.innerWidth / 2);
//   kinet.animate("y", event.clientY - window.innerHeight / 2 - 30);
// });



