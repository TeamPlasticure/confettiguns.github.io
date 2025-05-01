// Make canvas full screen
const canvas = document.getElementById('confetti-canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Insane confetti explosion on load!
function insaneConfetti() {
  // Multiple bursts for "insane" effect
  const duration = 2.2 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = {
    startVelocity: 45,
    spread: 360,
    ticks: 80,
    zIndex: 1,
    colors: ['#f7d51d', '#e74c3c', '#3498db', '#2ecc71', '#9b59b6', '#fff', '#ff69b4']
  };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      clearInterval(interval);
      return;
    }

    // Random burst positions
    confetti(Object.assign({}, defaults, {
      particleCount: randomInRange(60, 100),
      origin: {
        x: Math.random(),
        y: Math.random() * 0.7
      }
    }));
  }, 180);

  // Big central burst
  setTimeout(() => {
    confetti(Object.assign({}, defaults, {
      particleCount: 350,
      origin: { x: 0.5, y: 0.5 },
      spread: 360,
      scalar: 1.2,
      startVelocity: 60
    }));
  }, 350);
}

window.onload = insaneConfetti;
