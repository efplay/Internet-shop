import { getMainTitle } from '/src/main-code/components/mainTitle/mainTitle.js'; // Imports the {f()} function from the /... module to create or get the main title of the page.
import { getDesc } from '/src/main-code/components/desc/desc.js';// Imports the {f()} function from the /... module to create or get the main title of the page.
// Product Page 
export function getProductPage(title){  //create html element to product page
    const page = document.createElement("div") // create div element in MainPage
    page.classList.add("page","product-page","container")  // create additional class to out element  page "div"
    
    const mainTitle = getMainTitle(title) // we create main page in function getMainPage, but it create by other element
    const desc = getDesc("Page still not working...")  // we get the function and add to their string(text)


    page.append(mainTitle,desc) // create the mainPage to our page
    return page;  // with it function do not work  
}
 