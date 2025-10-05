import initParticleEffect  from './effectBg.js'
import getHeader from './components/header.js'

//agregando canvas
const body = document.body;
const canvas = document.createElement("canvas");
const containerCanvas = document.createElement("div");

canvas.id = "particlesCanvas";
canvas.className = "particles-canvas"; 
containerCanvas.className = "animated-bg"; 
containerCanvas.appendChild(canvas);
body.appendChild(containerCanvas);

initParticleEffect()

//agregando header
getHeader([
    {href: "/", text: "Home"},
    {href: "/missions", text: "Missions"},
    {href: "/contact", text: "Contact"}, 
]);