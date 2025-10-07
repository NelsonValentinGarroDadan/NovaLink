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
    {href: "/src/pages/missions.html", text: "Missions"},
    {href: "/src/pages/contact.html", text: "Contact"}, 
]);

//generando carucel
Carucel([
  {
    url: "./public/imgs/home/futuristic-rocket-launching-into-space.jpg",
    alt: "Rocket Launch",
  },
  {
    url: "./public/imgs/home/astronaut-floating-in-space-with-earth.jpg",
    alt: "Astronaut in Space",
  },
  {
    url: "./public/imgs/home/mars-planet-surface-exploration.jpg",
    alt: "Mars Exploration",
  },
  {
    url: "./public/imgs/home/space-station-orbiting-earth.jpg",
    alt: "Space Station",
  },
])
//generando cards Home
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
//generando cards Missions
const cardContainerMissions = document.getElementById('card-container-missions');
if(cardContainerMissions) setCard(cardContainerMissions,[
        {
            title: "Aurora IX",
            description: "Advanced satellite network establishing high-bandwidth communication links between Earth and Mars. Aurora IX represents the next generation of deep-space data transmission.",
            imgSrc: "../../public/imgs/missions/aurora-satellite-in-orbit.jpg"
        },
        {
            title: "TitanLink",
            description: "Pioneering mission to establish a permanent communication relay station on Titan, Saturn's largest moon. This mission will enable real-time data transmission from the outer solar system.",
            imgSrc: "../../public/imgs/missions/titan-moon-exploration-probe.jpg"
        },
        {
            title: "Helios Gateway",
            description: "Solar-powered communication hub positioned at the L1 Lagrange point. Helios Gateway serves as the primary relay station for all interplanetary communications.",
            imgSrc: "../../public/imgs/missions/solar-powered-space-station.jpg"
        },
        {
            title: "Quantum Nexus",
            description: "Revolutionary quantum entanglement communication system enabling instantaneous data transfer across vast distances. Breaking the light-speed barrier for information.",
            imgSrc: "../../public/imgs/missions/quantum-communication-satellite.jpg"
        },
        {
            title: "Stellar Beacon",
            description: "Network of autonomous beacons deployed throughout the solar system, creating a GPS-like navigation system for spacecraft and establishing emergency communication protocols.",
            imgSrc: "../../public/imgs/missions/deep-space-beacon-array.jpg"
        },
        {
            title: "Voyager Legacy",
            description: "Next-generation interstellar probe carrying advanced communication technology beyond our solar system. Continuing humanity's journey to the stars.",
            imgSrc: "../../public/imgs/missions/interstellar-probe-mission.jpg"
        },
    ]);
const cardContainerMissions2 = document.getElementById('card-container-missions-2');
if(cardContainerMissions2) setCard(cardContainerMissions2,[ //esto esta horrible pero estoy aburrido jajaja
        {
            title:` 
                <span> <img src="../../public/icons/missions/calendar.png"/> 2024</span>
                <span class="completed pined">Completed</span> 
            `,
            description:"Launch of Aurora IX satellite network"
        },
        {
            title:` 
                <span> <img src="../../public/icons/missions/calendar.png"/> 2025</span>
                <span class="inprogress pined">In Progress</span> 
            `,
            description:"TitanLink mission deployment"
        },
        {
            title:` 
                <span><img src="../../public/icons/missions/calendar.png"/> 2026</span>
                <span class="planed pined">Planned</span> 
            `,
            description:"Helios Gateway station operational"
        },
        {
            title:`  
                <span><img src="../../public/icons/missions/calendar.png"/> 2027</span>
                <span class="planed pined">Planned</span> 
            `,
            description:"Launch of Aurora IX satellite network"
        },
        {
            title:` 
                <span><img src="../../public/icons/missions/calendar.png"/> 2028</span>
                <span class="planed pined">Planned</span> 
            `,
            description:"Launch of Aurora IX satellite network"
        },
    ])
const cardContainerMissions3 = document.getElementById('card-container-missions-3');
if(cardContainerMissions3)  setCard(cardContainerMissions3, [
        {
            title: "Houston, USA",
            description: "Primary mission control center coordinating all deep-space operations",
            imgSrc: "../../public/icons/missions/location.png"
        },
        {
            title: "Tokyo, Japan",
            description: "Advanced research facility focusing on quantum communication technology",
            imgSrc: "../../public/icons/missions/location.png"
        },
        {
            title: "Munich, Germany",
            description: "European operations hub managing satellite network maintenance",
            imgSrc: "../../public/icons/missions/location.png"
        },
    ]);
getFooter(body)