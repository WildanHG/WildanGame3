const karakter = document.getElementById("karakter");
const tombol = document.getElementById("tombol");
const scoreSpan = document.getElementById("score");
const suara = document.getElementById("suara");
const suaraCrot = document.getElementById("suaraCrot");
const suaraAhhh = document.getElementById("suaraAhhh");

let skor = 0;
let event30aktif = false;

function ubahKeTTS() {
  const nextSkor = skor + 1;

  if (nextSkor % 30 === 0 && !event30aktif) {
    karakter.src = "assets/ttc.png";

    suaraCrot.currentTime = 0;
    suaraCrot.volume = 1.0;
    suaraCrot.play();

    suaraAhhh.currentTime = 0;
    suaraAhhh.volume = 1.0;
    suaraAhhh.play();

    if (navigator.vibrate) {
      navigator.vibrate(200);
    }

    event30aktif = true;
  } else if (nextSkor % 30 !== 0) {
    karakter.src = "assets/tts.png";

    suara.src = "assets/ah.mp3";
    suara.volume = 0.7;
    suara.currentTime = 0;
    suara.play();

    event30aktif = false;
  }
}

function kembaliKeTTD() {
  if (!event30aktif) {
    karakter.src = "assets/ttd.png";
  }
  skor++;
  scoreSpan.textContent = skor;
}

// Mouse
tombol.addEventListener("mousedown", ubahKeTTS);
tombol.addEventListener("mouseup", kembaliKeTTD);
tombol.addEventListener("mouseleave", kembaliKeTTD);

// Touch (HP)
tombol.addEventListener("touchstart", (e) => {
  e.preventDefault();
  ubahKeTTS();
});
tombol.addEventListener("touchend", (e) => {
  e.preventDefault();
  kembaliKeTTD();
});