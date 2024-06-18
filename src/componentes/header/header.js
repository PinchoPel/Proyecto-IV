import "./header.css"

export const header = document.createElement("header");
const title = document.createElement("h1");
const sergio = document.createElement("h2");
title.textContent = "Portfolio -";
sergio.textContent = "Sergio Zúñiga";
sergio.id = "sergio";
header.append(title);
header.append(sergio);
