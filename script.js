
let topIndex = 3;

function tapWindow(element) {
  element.style.zIndex = topIndex++;
}

function closeElement(element) {
  element.style.display = 'none';
}

function toggleMusic() {
  const video = document.getElementById("videoElement");
  const musicToggle = document.getElementById("musicToggle");

  if (video.muted) {
    video.muted = false;
    video.style.display = "block";
    video.play();
    musicToggle.textContent = "Mute Music";
  } else {
    video.muted = true;
    video.style.display = "none";
    musicToggle.textContent = "Play Music";
  }
}

function setDate() {
  const timeElement = document.getElementById("time");
  timeElement.innerText = new Date().toLocaleString();
  setTimeout(setDate, 1000);
}

// initialize date display
setDate();

// video player functions
function openVideoPlayer() {
    const player = document.getElementById("videoPlayerWindow");
    player.style.display = "block";
    player.style.zIndex = topIndex++;
    const video = document.getElementById("videoPlayer");
    video.currentTime = 0; // Reset to start
    video.play().catch(e => console.log("Video play failed:", e));
}

function closeVideoPlayer() {
  const player = document.getElementById("videoPlayerWindow");
  player.style.display = "none";
  document.getElementById("videoPlayer").pause();
}

// snake Game Functions
function openSnakeGame() {
  const gameWindow = document.getElementById("snakeGameWindow");
  gameWindow.style.display = "block";
  gameWindow.style.zIndex = topIndex++;
}

function closeSnakeGame() {
  const gameWindow = document.getElementById("snakeGameWindow");
  gameWindow.style.display = "none";
}