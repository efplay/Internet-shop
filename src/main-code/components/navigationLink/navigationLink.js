import { router } from "/src/main-code/main"
import "./navigationLink.css"

export function getNavigationLink(path,title = ""){
    let link = document.createElement("a")  // create the html (a) element in js code
    link.href = path
    link.classList.add("navigation-link") // add to our html element class
    link.textContent = title
   // link.setAttribute("data-navigo", true)//adds or changes the data-navigo attribute with a value of “true” to the link1 element. 
    link.addEventListener("click", function(event){ // add the logical "click" on the button in nav links
        event.preventDefault() //  remove standard behavior is to navigate to the URL specified in href. This method overrides that behavior.
        router.navigate(path);// which one page we have link
    })
    return link
}