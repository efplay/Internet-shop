import { router } from "/src/main-code/main"// Imports a router instance from the main.js file for use in the web application routing.
import {getNavigationLink} from "/src/main-code/components/navigationLink/navigationLink.js"
import {getLogo} from "/src/main-code/components/logo/logo.js"
import { getBasketBtn } from "/src/main-code/components/basketBtn/basketBtn";

import './header.css'

// Create Header
 export function getHeader(){
    const header = document.createElement("header")  // create the html (header) element in js code
    header.classList.add("header") // add to our html element class

    //create container 
    const container = document.createElement("div")  // create the html (div) element in js code
    container.classList.add("container", "header_container") // add to our html element class

    const logo = getLogo()
    logo.classList.add("header__logo")
    const basketBtn =getBasketBtn()
    // create nav
    const nav = document.createElement("nav")  // create the html (nav) element in js code
    nav.classList.add("header_navigation") // add to our html element class

  // The links object contains links for navigation
  // Each link is created via the getNavigationLink function or added directly (e.g. basketBtn).
    const links ={
        "home": getNavigationLink("/","MainPage"), // Create a link for the main page with URL “/” and text “MainPage”
        "directory" :  getNavigationLink("/directoryPage","Directory"), // Create a link for the “Directory” page
        "basket" :basketBtn  // Add a basket button (basketBtn), which has already been created earlier
    } 
    // Go through all elements of the links object
    for(const oneLink in links){
          // Add each link (or button) to the nav element
        nav.append(links[oneLink]) //returns the corresponding DOM element (e.g., a link or button).
    }

    // The setActiveLink function sets the “active” class for the current active link
    // If the link argument is passed, the corresponding link becomes active    
    const setActiveLink = function(link = ""){
         // Go through all links in the links object
        for(const oneLink in links ){
             // Remove the “active” class from each link to remove the previous activity
            links[oneLink].classList.remove("active")
        }   // If the link argument is passed (and it is not empty)
        if(link !== ""){ // Add the “active” class for the link corresponding to the passed key
            links[link].classList.add("active")
        }
    }
    // Call setActiveLink with the argument “home”.
   //setActiveLink("home")
   
    container.append(logo,nav,basketBtn)   // create the nav into the container
    header.append(container)

    return {
        header,
        setActiveLink
 } //  with it function header do not work
}