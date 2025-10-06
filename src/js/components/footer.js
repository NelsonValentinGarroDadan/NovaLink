export default function getFooter(body){
    const footer = document.createElement('footer');
    footer.innerHTML = "All rights reserved &copy; 2024 - NovaLink";
    body.appendChild(footer);
}