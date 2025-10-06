function setCarucel(imgs,carucelContainer,sliderContainer){
    const sliders = [];
    const markerContainer = document.createElement('div');
    markerContainer.setAttribute('id','markers');
    for(let i=0; i<imgs.length ; i++) {
        const slidePrototype = document.createElement('div');
        slidePrototype.classList.add('slide'); 
        if(i===0) slidePrototype.classList.add('active');
        const imgElement = document.createElement('img');
        imgElement.src = imgs[i].url;
        imgElement.alt = imgs[i].alt;
    
        
        const markerElement = document.createElement('span')
        markerElement.classList.add('marker');
        if(i===0) markerElement.classList.add('active');
        markerElement.setAttribute('id',i);
    
        markerContainer.appendChild(markerElement);
        slidePrototype.appendChild(imgElement); 
        sliders.push(slidePrototype);
        sliderContainer.appendChild(slidePrototype);
    }
    const rightArrow = document.createElement('div');
    const iconRight = document.createElement('img');
    iconRight.src = "./public/icons/right.png";
    iconRight.alt = "Right Arrow";
    rightArrow.appendChild(iconRight);
    rightArrow.classList.add('arrow','right-arrow');

    const leftArrow = document.createElement('div');
    const iconLeft = document.createElement('img');
    iconLeft.src = "./public/icons/right.png";
    iconLeft.alt = "Left Arrow";
    leftArrow.appendChild(iconLeft);
    leftArrow.classList.add('arrow','left-arrow');
    
      
    carucelContainer.appendChild(markerContainer);
    carucelContainer.appendChild(rightArrow);
    carucelContainer.appendChild(leftArrow);
    return sliders;
} 
function updateSlide(index,sliders,markers) {
    // quita activos
    document.querySelector('.marker.active')?.classList.remove('active');
    document.querySelector('.slide.active')?.classList.remove('active');
    // agrega nuevos
    markers[index].classList.add('active');
    sliders[index].classList.add('active');
}

export default function Carucel(imgs) {
    const carucelContainer = document.getElementById('carucel');
    const sliderContainer = document.getElementsByClassName('slider')[0];
    if(!carucelContainer) return; 
    let index = 0;
    const sliders = setCarucel(imgs,carucelContainer,sliderContainer); 
    const markers = document.getElementsByClassName('marker');  
 
    // Auto Slide
    let autoSlide = setInterval(
        ()=>{
            index = (index + 1) % sliders.length; 
            updateSlide(index,sliders,markers);
        }
    , 4000);

     
    function resetAutoSlide() {
        clearInterval(autoSlide);
        autoSlide = setInterval(()=>{
            index = (index + 1) % sliders.length; 
            updateSlide(index,sliders,markers);
        }, 4000);
    }
    for(const marker of markers) {
        marker.addEventListener('click', function(e) { 
            index = Number(e.target.id);
            updateSlide(index,sliders,markers);
        });
    } 

    /* Left Arrow */
    const rightArrow = document.getElementsByClassName('right-arrow')[0];
    rightArrow.addEventListener('click', function() {  
        index = (index + 1) % sliders.length; 
        updateSlide(index,sliders,markers);
        resetAutoSlide();
    });

    /* Right Arrow */
    const leftArrow = document.getElementsByClassName('left-arrow')[0];
    leftArrow.addEventListener('click', function() {  
        index = (index - 1 + sliders.length) % sliders.length; 
        updateSlide(index,sliders,markers);
        resetAutoSlide();
    });

}