// Make canvas full screen and responsive
const canvas = document.getElementById('confetti-canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Smoother, longer, and more continuous confetti
function smoothInsaneConfetti() {
  const duration = 3200;
  const animationEnd = Date.now() + duration;
  const defaults = {
    startVelocity: 45,
    spread: 360,
    ticks: 90,
    zIndex: 1,
    gravity: 0.75,
    scalar: 1.1,
    colors: ['#f7d51d', '#e74c3c', '#3498db', '#2ecc71', '#9b59b6', '#fff', '#ff69b4']
  };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  // Use a dedicated canvas instance for performance
  const myConfetti = confetti.create(canvas, { resize: true, useWorker: true });

  // Continuous bursts
  const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now();
    if (timeLeft <= 0) {
      clearInterval(interval);
      return;
    }
    // Side bursts
    myConfetti(Object.assign({}, defaults, {
      particleCount: randomInRange(30, 60),
      angle: randomInRange(55, 125),
      spread: 80,
      origin: { x: Math.random() * 0.3, y: Math.random() * 0.7 }
    }));
    myConfetti(Object.assign({}, defaults, {
      particleCount: randomInRange(30, 60),
      angle: randomInRange(55, 125),
      spread: 80,
      origin: { x: 1 - Math.random() * 0.3, y: Math.random() * 0.7 }
    }));
  }, 170);

  // Central big burst
  setTimeout(() => {
    myConfetti(Object.assign({}, defaults, {
      particleCount: 400,
      origin: { x: 0.5, y: 0.5 },
      spread: 360,
      scalar: 1.3,
      startVelocity: 65
    }));
  }, 350);
}

window.onload = smoothInsaneConfetti;
