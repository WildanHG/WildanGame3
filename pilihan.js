let selectedGame = "";

function selectGame(id) {
  document.querySelectorAll(".game-img").forEach(img => {
    img.classList.remove("selected");
  });

  document.getElementById(id).classList.add("selected");
  selectedGame = id;
}

function mainkan() {
  if (selectedGame === "game1") {
    window.location.href = "game1.html";
  } else if (selectedGame === "game2") {
    window.location.href = "game2.html";
  } else {
    alert("Pilih game terlebih dahulu!");
  }
}