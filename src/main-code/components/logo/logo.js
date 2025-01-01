import "./logo.css"
import logoSVG from "/src/assets/img/logo.svg";
//create the logo
export function getLogo(){
    const logo = document.createElement("img")
    logo.classList.add("logo")
    logo.src=logoSVG
    return logo
}