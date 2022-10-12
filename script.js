const addPlaying = function (e) {
  const audio = document.querySelector(`audio[data-key= '${e.keyCode}']`);
  const key = document.querySelector(`.key[data-key= '${e.keyCode}']`);
  if (!audio) return;
  audio.currentTime = 0; // rewind audio
  audio.play();
  key.classList.add("playing");
};

const removePlaying = function (e) {
  const key = document.querySelector(`.key[data-key= '${e.keyCode}']`);
  key.classList.remove("playing");
};

const keys = document.querySelectorAll(".key");
window.addEventListener("keyup", removePlaying);
window.addEventListener("keydown", addPlaying);
