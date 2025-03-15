const canvas = document.getElementById("interactive-bg");
const ctx = canvas.getContext("2d");

// Resize the canvas to fill the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

let particlesArray;

// Create a particle
class Particle {
  constructor(x, y, directionX, directionY, size, color) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
  }

  // Draw each particle with a blur effect
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);

    // Add shadow blur to create the blur effect
    ctx.shadowBlur = 10; // Adjust this value to increase/decrease blur
    ctx.shadowColor = this.color; // Set blur color same as particle color

    ctx.fillStyle = this.color;
    ctx.fill();

    // Reset shadowBlur to avoid applying it globally
    ctx.shadowBlur = 0;
  }

  // Update particle movement
  update() {
    if (this.x + this.size > canvas.width || this.x - this.size < 0) {
      this.directionX = -this.directionX;
    }

    if (this.y + this.size > canvas.height || this.y - this.size < 0) {
      this.directionY = -this.directionY;
    }

    this.x += this.directionX;
    this.y += this.directionY;

    this.draw();
  }
}

// Initialize particle array
function init() {
  particlesArray = [];
  let numberOfParticles = (canvas.width * canvas.height) / 4000;
  for (let i = 0; i < numberOfParticles; i++) {
    let size = Math.random() * 5;
    let x = Math.random() * (innerWidth - size * 2) + size;
    let y = Math.random() * (innerHeight - size * 2) + size;
    let directionX = Math.random() * 0.4 - 0.2;
    let directionY = Math.random() * 0.4 - 0.2;
    let color = "#ffffff";

    particlesArray.push(
      new Particle(x, y, directionX, directionY, size, color)
    );
  }
}

// Animate particles
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
  }
}

init();
animate();
