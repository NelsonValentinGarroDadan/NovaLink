function getCard(title, description, imgSrc) {
    const card = document.createElement('div');
    card.className = 'card';
    if(imgSrc){
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = title;    
        card.appendChild(img);
    }
     
    const cardTitle = document.createElement('h3');
    cardTitle.innerHTML = title;
    
    const cardContent = document.createElement('p');
    cardContent.textContent = description;
 
    card.appendChild(cardTitle);
    card.appendChild(cardContent);
    return card;
}

export default function setCard(container,cardsData) { 
    cardsData.forEach(cardData => {
        const card = getCard(cardData.title, cardData.description, cardData.imgSrc);
        container.appendChild(card);
    });
}