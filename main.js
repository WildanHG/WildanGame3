function playClickSound() {
  document.getElementById("clickSound").play();
  setTimeout(() => {
    window.location.href = "pilihan.html";
  }, 200);
}

function goToCredits() {
  playClickSound();
  setTimeout(() => {
    window.location.href = "credit.html";
  }, 200);
}

// Meteor randomizer
const meteors = document.querySelectorAll('.custom-meteor');

meteors.forEach((meteor, index) => {
  function animateMeteor() {
    const delay = Math.random() * 2000 + 2000; // 2-4 detik
    const size = Math.random() * 0.8 + 0.5;
    const left = Math.random() * window.innerWidth;
    meteor.style.left = `${left}px`;
    meteor.style.transform = `scale(${size})`;
    meteor.style.animationDuration = `${Math.random() * 2 + 1}s`;

    setTimeout(() => {
      meteor.style.animation = 'none';
      meteor.offsetHeight;
      meteor.style.animation = '';
      animateMeteor();
    }, delay);
  }
  animateMeteor();
});