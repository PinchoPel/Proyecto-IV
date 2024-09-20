
const logos = [
   
    {
        imagen: ".https://66ed2baf00b9e01101fc6aad--gleeful-arithmetic-728b2b.netlify.app/html-1.svg",
        nombre: "HTML5"
      },
      {
        imagen: "https://66ed2baf00b9e01101fc6aad--gleeful-arithmetic-728b2b.netlify.app/css-3.svg",
        nombre: "CSS3"
      },
      {
        imagen: "https://66ed2baf00b9e01101fc6aad--gleeful-arithmetic-728b2b.netlify.app/sass-1.svg",
        nombre: "SCSS"
      },
      {
        imagen: "https://66ed2baf00b9e01101fc6aad--gleeful-arithmetic-728b2b.netlify.app/javascript-1.svg",
        nombre: "JavaScript"
      },
      {
        imagen: "https://66ed2baf00b9e01101fc6aad--gleeful-arithmetic-728b2b.netlify.app/nodejs-1.svg",
        nombre: "NodeJS"
      },
      {
        imagen: "https://66ed2baf00b9e01101fc6aad--gleeful-arithmetic-728b2b.netlify.app/vitejs.svg",
        nombre: "VITE"
      },
      {
        imagen: "https://66ed2baf00b9e01101fc6aad--gleeful-arithmetic-728b2b.netlify.app/github-icon-1.svg",
        nombre: "GitHub",
      },

]

import { mainPart } from "../main-part"
import { sectionHeader } from "../main-part";
import { section } from "../main-part";
import { changeButton } from "../Change_Button/Change_Button";
import { sectionTitle } from "../main-part";

import "./knowledges.css"


export let renderLogos = () => {
    mainPart.innerHTML = "";
   sectionHeader.innerHTML = ""; 
    section.innerHTML = "";

    sectionTitle.textContent = "My Knowledges";
    changeButton.textContent = "Go to My Projects";
   
    logos.forEach(element => {
        let cardLogo = document.createElement("div");
        let logo = document.createElement("img");
        let name = document.createElement("h4");
      
        logo.src = element.imagen;
        logo.alt = element.nombre;
        logo.classList = "logo";
        name.textContent = element.nombre;
        cardLogo.classList = "cardlogo";
        section.id = "Knowledgessection";

        cardLogo.append(logo);
        cardLogo.append(name);
        sectionHeader.append(sectionTitle);
        sectionHeader.append(changeButton);
        section.append(cardLogo);
        mainPart.append(sectionHeader);
        mainPart.append(section);
    })};