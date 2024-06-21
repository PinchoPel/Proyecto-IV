import { renderLogos } from "../knowledges/knowledges";
import { renderProjects } from "../projects/projects";
import "./Change_Button.css"

export let changeButton = document.createElement("button");

let showLogos = true;


  function changeContent() {
    if (showLogos) {
        renderProjects();
    } else {
        renderLogos();
    }
    showLogos = !showLogos;
  }


  changeButton.addEventListener('click', changeContent);
