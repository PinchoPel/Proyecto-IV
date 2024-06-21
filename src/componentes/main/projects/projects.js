const projects = [
    {
        Imagen: "https://6675ebcda79a96ef9d798edb--stalwart-llama-eeb07b.netlify.app/Fast-Stop.png",
        Enlace: "https://soft-granita-7e5fd8.netlify.app/",
        Nombre: "Visit project",
        Alt: "Web tienda de motos",
    },
    {
        Imagen: "https://6675ebcda79a96ef9d798edb--stalwart-llama-eeb07b.netlify.app/Unsplashing.png",
        Enlace: "https://unsplashingproyectoiii.netlify.app/",
        Nombre: "Visit project",
        Alt:"Web para buscar imágenes",
    },
    {
        Imagen: "https://6675ebcda79a96ef9d798edb--stalwart-llama-eeb07b.netlify.app/plantify.png",
        Enlace: "https://cool-donut-1384e2.netlify.app/",
        Nombre: "Visit project",
        Alt: "Web tienda de plantas",
    },
    {
        Imagen: "https://6675ebcda79a96ef9d798edb--stalwart-llama-eeb07b.netlify.app/code_icon-icons.com_73620.png",
        Enlace: "https://github.com/PinchoPel",
        Nombre: "Visit GitHub's profile",
        Alt: "Perfil de Github",
    },
]


import "./projects.css"

import { mainPart } from "../main-part"
import { sectionHeader } from "../main-part";
import { section } from "../main-part";
import { changeButton } from "../Change_Button/Change_Button";
import { sectionTitle } from "../main-part";

export let renderProjects = () =>{
    mainPart.innerHTML = "";
    section.innerHTML = "";

    sectionTitle.textContent = "My Projects";
    changeButton.textContent = "Go to My Knowledges";

   projects.forEach(element => {

    let cardProject = document.createElement("div");
    let imageProject = document.createElement("img");
    let linkProject = document.createElement("a");

    cardProject.classList = "cardproject";
    imageProject.classList = "imageproject";
    imageProject.src = element.Imagen;
    imageProject.alt = element.Alt;
    linkProject.href = element.Enlace;
    linkProject.textContent = element.Nombre;
    section.id= "projectsection";

    cardProject.append(imageProject);
    cardProject.append(linkProject);
    sectionHeader.append(sectionTitle);
    sectionHeader.append(changeButton);
    section.append(cardProject);
    mainPart.append(sectionHeader);
    mainPart.append(section);
   });
}