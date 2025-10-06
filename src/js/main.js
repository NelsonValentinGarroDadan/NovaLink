import initParticleEffect  from './effectBg.js'
import getHeader from './components/header.js'
import Carucel from './components/carucel.js';
import setCard from './components/cards.js';

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
const cardContainerHome1 = document.getElementById('card-container-home');
if(cardContainerHome1) 
    setCard(cardContainerHome1,[
    { 
        title: "Advanced Technology",
        description: "Cutting-edge quantum communication systems enabling faster-than-light data transmission.",
        imgSrc: "./public/icons/home/rocket.png"
    },
    { 
        title: "Global Network",
        description: "Extensive satellite constellation covering every corner of the solar system.",
        imgSrc: "./public/icons/home/satellite.png"
    },
    { 
        title: "24/7 Support",
        description: "Round-the-clock mission control and technical support for all operations.",
        imgSrc: "./public/icons/home/wifi.png"
    },
    { 
        title: "Reliable Performance",
        description: "99.99% uptime guarantee with redundant systems and fail-safe protocols.",
        imgSrc: "./public/icons/home/bolt.png"
    },
]);