let topIndex = 3;

function tapWindow(element) {
  element.style.zIndex = topIndex++;
}

function closeElement(element) {
  element.style.display = 'none';
}

function toggleMusic() {
  const audio = document.getElementById("audioElement");
  const musicToggle = document.getElementById("musicToggle");

  if (audio.paused) {
    audio.play().then(() => {
      musicToggle.textContent = "Mute Music";
    }).catch(err => {
      alert("Audio playback blocked. Try clicking anywhere first.");
      console.warn("Audio error:", err);
    });
  } else {
    audio.pause();
    musicToggle.textContent = "Play Music";
  }
}

function setDate() {
  const timeElement = document.getElementById("time");
  timeElement.innerText = new Date().toLocaleString();
  setTimeout(setDate, 1000);
}
setDate();

function openVideoPlayer() {
  const player = document.getElementById("videoPlayerWindow");
  const video = document.getElementById("videoPlayerWindowTag");
  player.style.display = "block";
  player.style.zIndex = topIndex++;
  video.currentTime = 0;
  video.play().catch(err => console.warn("ERROR!", err));
}

function closeVideoPlayer() {
  const player = document.getElementById("videoPlayerWindow");
  const video = document.getElementById("videoPlayerWindowTag");
  player.style.display = "none";
  video.pause();
}

function openSnakeGame() {
  const gameWindow = document.getElementById("snakeGameWindow");
  gameWindow.style.display = "block";
  gameWindow.style.zIndex = topIndex++;
}

function closeSnakeGame() {
  const gameWindow = document.getElementById("snakeGameWindow");
  gameWindow.style.display = "none";
}

function openWebcam() {
  const windowEl = document.getElementById("webcamWindow");
  const video = document.getElementById("webcamVideo");

  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(stream => {
      video.srcObject = stream;
      windowEl.style.display = "block";
      windowEl.style.zIndex = topIndex++;
      video.dataset.activeStream = "true";
    })
    .catch(err => {
      alert("ERROR! " + err.message);
    });
}

function closeWebcam() {
  const video = document.getElementById("webcamVideo");
  const stream = video.srcObject;
  if (stream) {
    stream.getTracks().forEach(track => track.stop());
    video.srcObject = null;
  }
  document.getElementById("webcamWindow").style.display = "none";
}

let calcInput = "";

function openCalculator() {
  const calcWindow = document.getElementById("calculatorWindow");
  calcWindow.style.display = "block";
  calcWindow.style.zIndex = topIndex++;
  updateDisplay();
}

function closeCalculator() {
  document.getElementById("calculatorWindow").style.display = "none";
  calcInput = "";
}

function press(char) {
  calcInput += char;
  updateDisplay();
}

function calculate() {
  try {
    const result = eval(calcInput);
    calcInput = result.toString();
    updateDisplay();
  } catch (err) {
    calcInput = "Error";
    updateDisplay();
  }
}

function clearCalc() {
  calcInput = "";
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("calcDisplay").value = calcInput;
}

function goToButterPage() {
    window.location.href = "butter.html";
  }
  