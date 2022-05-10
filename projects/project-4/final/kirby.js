//create buttons
var start = 97,
  end = 122,
  button;

while (start <= end) {
  button = document.createElement("button");
  button.id = button.textContent = String.fromCharCode(start);
  document.body.appendChild(button);
  start += 1;
}

document.addEventListener("keypress", function onKeypress(evt) {
  var element = document.getElementById(String.fromCharCode(evt.charCode || evt.char));

  if (element) {
    document.addEventListener("keyup", function onKeyup() {
      document.removeEventListener("keyup", onKeyup);

      element.style.backgroundColor = "";
    }, false);

    element.style.backgroundColor = "#FF85B3";
  }
}, false);

//create 0-9 buttons
var start = 48,
  end = 57,
  button;

while (start <= end) {
  button = document.createElement("button");
  button.id = button.textContent = String.fromCharCode(start);
  document.body.appendChild(button);
  start += 1;
}

document.addEventListener("keypress", function onKeypress(evt) {
  var element = document.getElementById(String.fromCharCode(evt.charCode || evt.char));

  if (element) {
    document.addEventListener("keyup", function onKeyup() {
      document.removeEventListener("keyup", onKeyup);

      element.style.backgroundColor = "";
    }, false);

    element.style.backgroundColor = "#FF85B3";
  }
}, false);

//Images Switch
const keyboardEventElement = document.querySelector('body')
const keyboardFeedbackEventElement = document.querySelector('#keyborad-feedback')
const keybaordEventContainerElement = document.querySelector('container')

keyboardEventElement.addEventListener('keydown', (event) => {
  const feedbackElement = document.createElement('img')
  feedbackElement.innerHTML = "Key Pressed:" + event.key

  if (event.key === "q") {
    const bKeyElement = document.querySelector("#image")
    bKeyElement.innerHTML = "<img src=\"./assets/kirby_2.png\">";
    const textElement = document.querySelector("#text2")
    textElement.innerHTML = "Quick"
  }

  if (event.key === "a") {
    const bKeyElement = document.querySelector("#image")
    bKeyElement.innerHTML = "<img src=\"./assets/waddledee_5.png\">";
    const textElement = document.querySelector("#text2")
    textElement.innerHTML = "Active"
  }

  if (event.key === "w") {
    const bKeyElement = document.querySelector("#image")
    bKeyElement.innerHTML = "<img src=\"./assets/kirby_6.png\">";
    const textElement = document.querySelector("#text2")
    textElement.innerHTML = "Wild"

  }
  if (event.key === "e") {
    const bKeyElement = document.querySelector("#image")
    bKeyElement.innerHTML = "<img src=\"./assets/elfilin.png\">";
    const textElement = document.querySelector("#text2")
    textElement.innerHTML = "Earnest"
  }

  if (event.key === "r") {
    const bKeyElement = document.querySelector("#image")
    bKeyElement.innerHTML = "<img src=\"./assets/kirby_3.png\">";
    const textElement = document.querySelector("#text2")
    textElement.innerHTML = "Rapid"
  }

  if (event.key === "t") {
    const bKeyElement = document.querySelector("#image")
    bKeyElement.innerHTML = "<img src=\"./assets/kirby_13.png\">";
    const textElement = document.querySelector("#text2")
    textElement.innerHTML = "Tasty"
  }
  if (event.key === "y") {
    const bKeyElement = document.querySelector("#image")
    bKeyElement.innerHTML = "<img src=\"./assets/waddledee_4.png\">";
    const textElement = document.querySelector("#text2")
    textElement.innerHTML = "Young"
  }
  if (event.key === "u") {
    const bKeyElement = document.querySelector("#image")
    bKeyElement.innerHTML = "<img src=\"./assets/kirby_9.png\">";
    const textElement = document.querySelector("#text2")
    textElement.innerHTML = "Useful"
  }
  if (event.key === "i") {
    const bKeyElement = document.querySelector("#image")
    bKeyElement.innerHTML = "<img src=\"./assets/kirby_10.png\">";
    const textElement = document.querySelector("#text2")
    textElement.innerHTML = "Ideal"
  }
  if (event.key === "o") {
    const bKeyElement = document.querySelector("#image")
    bKeyElement.innerHTML = "<img src=\"./assets/kirby_11.png\">";
    const textElement = document.querySelector("#text2")
    textElement.innerHTML = "Odd"
  }
  if (event.key === "p") {
    const bKeyElement = document.querySelector("#image")
    bKeyElement.innerHTML = "<img src=\"./assets/kirby_12.png\">";
    const textElement = document.querySelector("#text2")
    textElement.innerHTML = "Patient"
  }
  if (event.key === "s") {
    const bKeyElement = document.querySelector("#image")
    bKeyElement.innerHTML = "<img src=\"./assets/kirby_4.png\">";
    const textElement = document.querySelector("#text2")
    textElement.innerHTML = "Smart"
  }
  if (event.key === "d") {
    const bKeyElement = document.querySelector("#image")
    bKeyElement.innerHTML = "<img src=\"./assets/kirby_13.png\">";
    const textElement = document.querySelector("#text2")
    textElement.innerHTML = "Dynamic"
  }
  if (event.key === "f") {
    const bKeyElement = document.querySelector("#image")
    bKeyElement.innerHTML = "<img src=\"./assets/kirby_14.png\">";
    const textElement = document.querySelector("#text2")
    textElement.innerHTML = "Funny"
  }
  if (event.key === "g") {
    const bKeyElement = document.querySelector("#image")
    bKeyElement.innerHTML = "<img src=\"./assets/kirby_15.png\">";
    const textElement = document.querySelector("#text2")
    textElement.innerHTML = "Gabby"
  }
  if (event.key === "h") {
    const bKeyElement = document.querySelector("#image")
    bKeyElement.innerHTML = "<img src=\"./assets/kirby_16.png\">";
    const textElement = document.querySelector("#text2")
    textElement.innerHTML = "Hungry"
  }
  if (event.key === "j") {
    const bKeyElement = document.querySelector("#image")
    bKeyElement.innerHTML = "<img src=\"./assets/waddledee_2.png\">";
    const textElement = document.querySelector("#text2")
    textElement.innerHTML = "Joyful"
  }
  if (event.key === "k") {
    const bKeyElement = document.querySelector("#image")
    bKeyElement.innerHTML = "<img src=\"./assets/kirby_17.png\">";
    const textElement = document.querySelector("#text2")
    textElement.innerHTML = "Keen"
  }
  if (event.key === "l") {
    const bKeyElement = document.querySelector("#image")
    bKeyElement.innerHTML = "<img src=\"./assets/kirby_18.png\">";
    const textElement = document.querySelector("#text2")
    textElement.innerHTML = "Lovely"
  }
  if (event.key === "z") {
    const bKeyElement = document.querySelector("#image")
    bKeyElement.innerHTML = "<img src=\"./assets/kirby_19.png\">";
    const textElement = document.querySelector("#text2")
    textElement.innerHTML = "Zealous"
  }
  if (event.key === "x") {
    const bKeyElement = document.querySelector("#image")
    bKeyElement.innerHTML = "<img src=\"./assets/kirby_20.png\">";
    const textElement = document.querySelector("#text2")
    textElement.innerHTML = "Xenia"
  }
  if (event.key === "c") {
    const bKeyElement = document.querySelector("#image")
    bKeyElement.innerHTML = "<img src=\"./assets/kirby_21.png\">";
    const textElement = document.querySelector("#text2")
    textElement.innerHTML = "Calm"
  }
  if (event.key === "v") {
    const bKeyElement = document.querySelector("#image")
    bKeyElement.innerHTML = "<img src=\"./assets/kirby_22.png\">";
    const textElement = document.querySelector("#text2")
    textElement.innerHTML = "Vast"
  }
  if (event.key === "b") {
    const bKeyElement = document.querySelector("#image")
    bKeyElement.innerHTML = "<img src=\"./assets/kirby_23.png\">";
    const textElement = document.querySelector("#text2")
    textElement.innerHTML = "Brave"
  }
  if (event.key === "n") {
    const bKeyElement = document.querySelector("#image")
    bKeyElement.innerHTML = "<img src=\"./assets/waddledee_3.png\">";
    const textElement = document.querySelector("#text2")
    textElement.innerHTML = "Naive"
  }
  if (event.key === "m") {
    const bKeyElement = document.querySelector("#image")
    bKeyElement.innerHTML = "<img src=\"./assets/kirby_24.png\">";
    const textElement = document.querySelector("#text2")
    textElement.innerHTML = "Meek"
  }
})

//background color switch
window.addEventListener('keydown', event => {
  switch (event.keyCode) {
    case 81: // q
      setBackgroundColor('#FFBED1');
      break;
    case 87: // w
      setBackgroundColor('#FFA454');
      break;
    case 69: // e
      setBackgroundColor('#A5FCD5');
      break;
    case 82: // r
      setBackgroundColor('#FEB3CA ');
      break;
    case 84: // t
      setBackgroundColor('#FF7F9C');
      break;
    case 89: // y
      setBackgroundColor('#FDC12A');
      break;
    case 85: // u
      setBackgroundColor('#FFA1C9');
      break;
    case 73: // i
      setBackgroundColor('#FC94AF');
      break;
    case 79: // o
      setBackgroundColor('#FABACB');
      break;
    case 80: // p
      setBackgroundColor('#F25278');
      break;
    case 65: // a
      setBackgroundColor('#FCAE1E');
      break;
    case 83: // s
      setBackgroundColor('pink');
      break;
    case 68: // d
      setBackgroundColor('#F79AC0');
      break;
    case 70: // f
      setBackgroundColor('#506FFA ');
      break;
    case 71: // g
      setBackgroundColor('#FC4C4E ');
      break;
    case 72: // h
      setBackgroundColor('#FF8400  ');
      break;
    case 74: // j
      setBackgroundColor('#FFA500');
      break;
    case 75: // k
      setBackgroundColor('#FDE64B');
      break;
    case 76: // l
      setBackgroundColor('#F0586A');
      break;
    case 90: // z
      setBackgroundColor('#C7EA46');
      break;
    case 88: // x
      setBackgroundColor('#82CAFA');
      break;
    case 67: // c
      setBackgroundColor('#FABACB');
      break;
    case 86: // v
      setBackgroundColor('#0492C2');
      break;
    case 66: // b
      setBackgroundColor('#F25279');
      break;
    case 78: // n
      setBackgroundColor('#FFD801');
      break;
    case 77: // m
      setBackgroundColor('#AF69ED');
      break;
  }
});

function setBackgroundColor(color) {
  document
    .querySelector('body')
    .style
    .backgroundColor = color;
}

//add audio

document.addEventListener('keydown', function (e) {
  if (e.keyCode == 49) {
    document.getElementById('audio1').play();
  }
})


document.addEventListener('keydown', function (e) {
  if (e.keyCode == 50) {
    document.getElementById('audio2').play();
  }
})


document.addEventListener('keydown', function (e) {
  if (e.keyCode == 51) {
    document.getElementById('audio3').play();
  }
});


document.addEventListener('keydown', function (e) {
  if (e.keyCode == 52) {
    document.getElementById('audio4').play();
  }
});


document.addEventListener('keydown', function (e) {
  if (e.keyCode == 53) {
    document.getElementById('audio5').play();
  }
});


document.addEventListener('keydown', function (e) {
  if (e.keyCode == 54) {
    document.getElementById('audio6').play();
  }
});


document.addEventListener('keydown', function (e) {
  if (e.keyCode == 55) {
    document.getElementById('audio7').play();
  }
});


document.addEventListener('keydown', function (e) {
  if (e.keyCode == 56) {
    document.getElementById('audio5').play();
  }
});


document.addEventListener('keydown', function (e) {
  if (e.keyCode == 57) {
    document.getElementById('audio9').play();
  }
});


document.addEventListener('keydown', function (e) {
  if (e.keyCode == 48) {
    document.getElementById('audio0').play();
  }
});

