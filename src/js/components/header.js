function getBurgerButton(nav){
    const burgerButton = document.createElement("div");
    burgerButton.className = "burger"; 

    for(let i = 0; i < 3; i++){
        const span = document.createElement("span");
        span.id = "bar"+"-"+(i);
        burgerButton.appendChild(span);
    }

    burgerButton.addEventListener("click", () => {
        if(burgerButton.classList.contains("active")){
            burgerButton.classList.remove("active");
            nav.classList.remove("show"); 
            return;
        }else{ 
            burgerButton.classList.add("active") ;
            nav.classList.add("show");
            return;
        } 
    });

    return burgerButton; 
}
export default function getHeader(links){
    const body = document.body; 
    const header = document.createElement("header");
    const titleHeader = document.createElement("a");
    titleHeader.textContent = "NovaLink";
    titleHeader.href = "/";
    const nav = document.createElement("nav");
    nav.className = "nav-links";
    const burgerButton = getBurgerButton(nav); 

    const current = window.location.pathname.replace(/index\.html$/, "").replace(/^\//, "");

    for(const link of links){
        const a = document.createElement("a");
        a.href = link.href;
        a.textContent = link.text; 
        const normalizedHref = link.href.replace(/^\.?\//, "");

        if (
            (normalizedHref !== "" && current.includes(normalizedHref)) ||
            (normalizedHref === "" && (current === "" || current === "index.html"))
        ) {
            a.id = "active";
        }
        nav.appendChild(a);
    }

    header.appendChild(titleHeader);
    header.appendChild(nav); 
    header.appendChild(burgerButton);

    body.appendChild(header);
}