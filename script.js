// Make canvas full screen and responsive
const canvas = document.getElementById('confetti-canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Smoother, centered, full-screen confetti
function smoothCenteredConfetti() {
  const myConfetti = confetti.create(canvas, { resize: true, useWorker: true });

  // Central big burst
  myConfetti({
    particleCount: 300,
    spread: 360,
    origin: { x: 0.5, y: 0.5 },
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
    myConfetti({
      particleCount: 60,
      spread: 160,
      origin: { x: 0.5, y: 0.5 },
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
