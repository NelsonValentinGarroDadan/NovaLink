// Clase Partícula
class Particle {
    constructor(canvas) {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.radius = Math.random() * 2 + 1;
    }

    update(canvas) {
        this.x += this.vx;
        this.y += this.vy;

        // Rebotar en los bordes
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 188, 212, 0.6)';
        ctx.fill();
    }
}
// Ajustar el tamaño del canvas
function resizeCanvas(canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
// Dibujar líneas entre partículas cercanas
function connectParticles(ctx, particles) {
    const maxDistance = 150;
    
    for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistance) {
        const opacity = (1 - distance / maxDistance) * 0.3;
        ctx.beginPath();
        ctx.strokeStyle = `rgba(0, 188, 212, ${opacity})`;
        ctx.lineWidth = 1;
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
        }
    }
    }
}
// Animación principal
function animate(ctx, particles,canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Actualizar y dibujar partículas
    particles.forEach(particle => {
    particle.update(canvas);
    particle.draw(ctx);
    });

    // Conectar partículas
    connectParticles(ctx, particles);

    requestAnimationFrame(() => animate(ctx, particles, canvas));
}

export default function initParticleEffect() {
 // Configuración del canvas
    const canvas = document.getElementById('particlesCanvas');
    const ctx = canvas.getContext('2d');

    
    resizeCanvas(canvas);
    window.addEventListener('resize', resizeCanvas);

    // Crear partículas
    const particleCount = 80;
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(canvas));
    } 
    // Iniciar animación
    animate(ctx, particles,canvas);
}
