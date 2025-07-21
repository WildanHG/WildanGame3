// 🔊 Sound klik tombol
const buttons = document.querySelectorAll(".btn");
const clickSound = new Audio("Click.mp3");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    clickSound.currentTime = 0; // Reset biar gak delay
    clickSound.play();
  });
});

// 🎶 Music lobby autoplay dan looping
const lobbyMusic = new Audio("Baoon_cikadap.mp3");
lobbyMusic.loop = true;
lobbyMusic.volume = 0.6;

// Coba autoplay
lobbyMusic.play().catch(() => {
  // Kalau autoplay diblokir browser, mainkan saat user klik pertama kali
  document.addEventListener("click", () => {
    lobbyMusic.play();
  }, { once: true });
});