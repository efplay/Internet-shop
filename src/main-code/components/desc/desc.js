import './desc.css'
// create the description
export function getDesc(text){ //  create  the function. he have parameter about text 
    const desc = document.createElement("p") // create the element (h1) in the MainTitle
    desc.classList.add("desc") // class to out h1 element
    desc.textContent = text // add text to our html element h1 (title)
    return desc; // return our function, so it will be work
    
}