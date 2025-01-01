import './mainTitle.css'

export function getMainTitle(text){ //  create  the function. he have parameter about text 
    const title = document.createElement("h1") // create the element (h1) in the MainTitle
    title.classList.add("main-title") // class to out h1 element
    title.textContent = text // add text to our html element h1 (title)
    return title; // return our function, so it will be work
    
}