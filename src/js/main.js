import initParticleEffect  from './effectBg.js'
import getHeader from './components/header.js'
import Carucel from './components/carucel.js';
import setCard from './components/cards.js';
import getFooter from './components/footer.js';

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
    {href: "./src/pages/missions.html", text: "Missions"},
    {href: "./src/pages/contact.html", text: "Contact"}, 
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
const cardContainerHome2 = document.getElementById('card-container-home-2');
if(cardContainerHome2) 
    setCard(cardContainerHome2,[
        {
            title: "Quantum Entanglement Network",
            description: "Our revolutionary quantum communication system uses entangled particles to transmit information instantaneously across vast distances, breaking the light-speed barrier for data transmission.", 
        },
        {
            title: "AI-Powered Signal Processing",
            description: "Advanced artificial intelligence algorithms optimize signal routing, reduce interference, and predict maintenance needs before failures occur, ensuring maximum reliability.",
        },
        {
            title: "Solar-Powered Infrastructure",
            description: "Solar-Powered InfrastructureAll our satellites and relay stations are powered by next-generation solar panels with 95% efficiency, making our network sustainable and environmentally responsible.",
        }
    ]);
const cardContainerHome3 = document.getElementById('card-container-home-3');
if(cardContainerHome3) 
    setCard(cardContainerHome3,[
        {
            title: "150+",
            description: "Active Satellites",
        },
        {
            title: "12",
            description: "Planetary Missions",
        },
        {
            title: "99.99%",
            description: "Network Uptime",
        },
        {
            title: "24 / 7",
            description: "Mission Control",
        },  
    ]);

getFooter(body)