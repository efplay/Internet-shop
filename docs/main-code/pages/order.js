import { getMainTitle } from '/src/main-code/components/mainTitle/mainTitle.js'; // Imports the {f()} function from the /... module to create or get the main title of the page.
import { getDesc } from '/src/main-code/components/desc/desc.js';// Imports the {f()} function from the /... module to create or get the main title of the page.
// Directory Page 

export function getOrderPage(){  //create html element to main page
    const page = document.createElement("div") // create div element in MainPage
    page.classList.add("page","directory-page","container")  // create additional class to out element  page "div"
    
    const mainTitle = getMainTitle("Processing") // we create main page in function getMainPage, but it create by other element
    const desc = getDesc("Here is a processing of the order")  // we get the function and add to their string(text)

    

    page.append(mainTitle,desc) // create the mainPage to our page
    return page;  // with it function do not work  
}