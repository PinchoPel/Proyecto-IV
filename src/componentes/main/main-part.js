import "./main-part.css"
import { changeButton } from "./Change_Button/Change_Button";

export const mainPart= document.createElement("main");

export const sectionHeader = document.createElement("div");
export const section = document.createElement("section");
export let sectionTitle = document.createElement("h2");
sectionHeader.id = "sectionheader";

mainPart.append(sectionHeader);
mainPart.append(section);

import { renderLogos } from "./knowledges/knowledges";
renderLogos()