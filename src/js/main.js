import initParticleEffect  from './effectBg.js'
import getHeader from './components/header.js'
import Carucel from './components/carucel.js';

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

//generando carucel
Carucel([
  {
    url: "./public/imgs/futuristic-rocket-launching-into-space.jpg",
    alt: "Rocket Launch",
  },
  {
    url: "./public/imgs/astronaut-floating-in-space-with-earth.jpg",
    alt: "Astronaut in Space",
  },
  {
    url: "./public/imgs/mars-planet-surface-exploration.jpg",
    alt: "Mars Exploration",
  },
  {
    url: "./public/imgs/space-station-orbiting-earth.jpg",
    alt: "Space Station",
  },
])