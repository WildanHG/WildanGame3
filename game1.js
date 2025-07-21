function goBack() {
  window.location.href = 'pilihan.html';
}

function playSkill(type) {
  const video = document.getElementById('skillVideo');
  const bg = document.getElementById('bgImage');
  
  let source = '';
  if (type === 'lempar') {
    source = 'assets/lempar.mp4';
  } else if (type === 'petir') {
    source = 'assets/petir.mp4';
  }

  video.src = source;
  video.style.display = 'block';
  bg.style.display = 'none';

  video.play();
  video.onended = () => {
    video.style.display = 'none';
    bg.style.display = 'block';
  };
}

function toggleFullscreen() {
  const doc = document.documentElement;
  if (!document.fullscreenElement) {
    doc.requestFullscreen().catch((err) => {
      alert("Gagal masuk fullscreen: " + err.message);
    });
  } else {
    document.exitFullscreen();
  }
}