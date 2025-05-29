const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const trackName = document.getElementById("trackName");

const playlist = [
  {
    name: "Track 1",
    src: "music/track1.mp3"
  },
  {
    name: "Track 2",
    src: "music/track2.mp3"
  },
  {
    name: "Track 3",
    src: "music/track3.mp3"
  }
];

let currentTrack = 0;

function loadTrack(index) {
  audio.src = playlist[index].src;
  trackName.textContent = playlist[index].name;
}

function playTrack() {
  audio.play();
  playBtn.textContent = "⏸";
}

function pauseTrack() {
  audio.pause();
  playBtn.textContent = "▶";
}

function togglePlay() {
  if (audio.paused) {
    playTrack();
  } else {
    pauseTrack();
  }
}

function nextTrack() {
  currentTrack = (currentTrack + 1) % playlist.length;
  loadTrack(currentTrack);
  playTrack();
}

function prevTrack() {
  currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
  loadTrack(currentTrack);
  playTrack();
}

function selectTrack(index) {
  currentTrack = index;
  loadTrack(index);
  playTrack();
}

// Auto move to next track when current ends
audio.addEventListener("ended", nextTrack);
