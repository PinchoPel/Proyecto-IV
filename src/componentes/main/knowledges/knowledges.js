
const logos = [
   
    {
        imagen: "./public/assets/html-1.svg",
        nombre: "HTML5"
      },
      {
        imagen: "./public/assets/css-3.svg",
        nombre: "CSS3"
      },
      {
        imagen: "./public/assets/sass-1.svg",
        nombre: "SCSS"
      },
      {
        imagen: "./public/assets/javascript-1.svg",
        nombre: "JavaScript"
      },
      {
        imagen: "./public/assets/nodejs-1.svg",
        nombre: "NodeJS"
      },
      {
        imagen: "./public/assets/vitejs.svg",
        nombre: "VITE"
      },
      {
        imagen: "./public/assets/github-icon-1.svg",
        nombre: "GitHub",
      },

]

import { mainPart } from "../main-part"

import "./knowledges.css"

export let renderLogos = () => {
    mainPart.innerHTML = "";
    logos.forEach(element => {
        let cardLogo = document.createElement("div");
        let logo = document.createElement("img");
        let name = document.createElement("h4");
        let route = document.createElement("a");
      
        logo.src = element.imagen;
        logo.alt = element.nombre;
        logo.classList = "logo";

        name.textContent = element.nombre;
        name.classList = "name";

        route.href = "https://github.com/PinchoPel";
        
        cardLogo.classList = "cardlogo";
        cardLogo.append(logo);
        cardLogo.append(name);
        mainPart.append(cardLogo);
    })};