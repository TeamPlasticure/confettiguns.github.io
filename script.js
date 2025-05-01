// Make canvas full screen and responsive
const canvas = document.getElementById('confetti-canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Helper to get the center of the element relative to the viewport
function getElementViewportCenter(elem) {
  const rect = elem.getBoundingClientRect();
  return {
    x: (rect.left + rect.right) / 2 / window.innerWidth,
    y: (rect.top + rect.bottom) / 2 / window.innerHeight
  };
}

// Confetti bursts from the center of the text, wherever it is in the viewport
function smoothCenteredConfetti() {
  const myConfetti = confetti.create(canvas, { resize: true, useWorker: true });
  const textElem = document.getElementById('main-title');
  const center = getElementViewportCenter(textElem);

  // Central big burst
  myConfetti({
    particleCount: 300,
    spread: 360,
    origin: { x: center.x, y: center.y },
    startVelocity: 60,
    scalar: 1.2,
    gravity: 0.8,
    ticks: 120,
    zIndex: 2,
    colors: ['#f7d51d', '#e74c3c', '#3498db', '#2ecc71', '#9b59b6', '#fff', '#ff69b4']
  });

  // Follow-up smaller bursts for smoothness
  let count = 0;
  const interval = setInterval(() => {
    const centerNow = getElementViewportCenter(textElem);
    myConfetti({
      particleCount: 60,
      spread: 160,
      origin: { x: centerNow.x, y: centerNow.y },
      startVelocity: 40,
      scalar: 1,
      gravity: 0.9,
      ticks: 90,
      zIndex: 2,
      colors: ['#f7d51d', '#e74c3c', '#3498db', '#2ecc71', '#9b59b6', '#fff', '#ff69b4']
    });
    count++;
    if (count > 7) clearInterval(interval);
  }, 180);
}

window.onload = smoothCenteredConfetti;
