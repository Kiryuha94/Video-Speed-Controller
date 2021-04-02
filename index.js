const video = document.getElementById('video');
const progress = document.getElementById('progress');
const progressBar = document.getElementById('progress-line');
const ADDED_INDENTATION = 2;
const min = 0.4;
const max = 4;
function changeSpeed(e) {
  const coordinateY = e.pageY - this.offsetTop + ADDED_INDENTATION;
  const persent = coordinateY / this.offsetHeight;
  const height = Math.round(persent * 100) + '%';
  const resultsPlaybackRate = persent * (max - min) + min;
  const optimizePlaybackRate = resultsPlaybackRate > max ? max : resultsPlaybackRate;
  progressBar.innerHTML = optimizePlaybackRate.toFixed(2) + 'x';
  video.playbackRate = optimizePlaybackRate;
  progressBar.style.height = height;
}

window.onload = () => {
  progress.addEventListener('mousemove', changeSpeed);
};
