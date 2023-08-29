const audio = document.getElementById('audio');
const trackTitle = document.querySelector('.track-title');
const artist = document.querySelector('.artist');

audio.addEventListener('play', () => {
  trackTitle.textContent = 'Song Title'; // Replace with actual track title
  artist.textContent = 'Artist Name'; // Replace with actual artist name
});

audio.addEventListener('pause', () => {
  trackTitle.textContent = 'Paused';
});

audio.addEventListener('ended', () => {
  trackTitle.textContent = 'Finished';
});

audio.addEventListener('timeupdate', () => {
  const currentTime = Math.floor(audio.currentTime);
  // Update progress bar or any other time-related feature
});
