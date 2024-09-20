const projects = [
    {
        Imagen: "https://66ed2baf00b9e01101fc6aad--gleeful-arithmetic-728b2b.netlify.app/Fast-Stop.png",
        Enlace: "https://soft-granita-7e5fd8.netlify.app/",
        Nombre: "Visit project",
        Alt: "Web tienda de motos",
    },
    {
        Imagen: "https://66ed2baf00b9e01101fc6aad--gleeful-arithmetic-728b2b.netlify.app/Unsplashing.png",
        Enlace: "https://unsplashingproyectoiii.netlify.app/",
        Nombre: "Visit project",
        Alt:"Web para buscar imágenes",
    },

    {
        Imagen: "https://66ed2baf00b9e01101fc6aad--gleeful-arithmetic-728b2b.netlify.app/zona%20de%20juegos.png",
        Enlace: "https://juegosproyectov.netlify.app/",
        Nombre: "Visit project and play",
        Alt: "Zona de juegos",
    },
    {
        Imagen: "https://66ed2baf00b9e01101fc6aad--gleeful-arithmetic-728b2b.netlify.app/code_icon-icons.com_73620.png",
        Enlace: "https://github.com/PinchoPel",
        Nombre: "Visit GitHub's profile",
        Alt: "Perfil de Github",
    },
    {
        Imagen: "https://66ed2baf00b9e01101fc6aad--gleeful-arithmetic-728b2b.netlify.app/plantify.png",
        Enlace: "https://prismatic-capybara-2e56c0.netlify.app/",
        Nombre: "Visit project",
        Alt: "Web tienda de plantas",
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