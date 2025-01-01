import {router} from '/src/main-code/main'
import { getMainTitle } from "/src/main-code/components/mainTitle/mainTitle.js"// Imports the {f()} function from the /... module to create or get the main title of the page.
import { getDesc } from "/src/main-code/components/desc/desc.js"// Imports the {f()} function from the /... module to create or get the description of the page.
// Basket Page 
export function getCartPage(){  //create html element to main page
    const page = document.createElement("div") // create div element in MainPage
    page.classList.add("page","cart-page","container")  // create additional class to out element  page "div"
    
    const mainTitle = getMainTitle("Cart") // we create main page in function getMainPage, but it create by other element
    const desc = getDesc("Page still not working...")  // we get the function and add to their string(text)
    //Link order processing
    let linkOrder = document.createElement("a")  // create the html (a) element in js code
    linkOrder.href = "/order"
    linkOrder.classList.add("btn") // add to our html element class
    linkOrder.textContent = "Order processing"
    linkOrder.setAttribute("data-navigo", true)//adds or changes the data-navigo attribute with a value of “true” to the link1 element. 

    linkOrder.addEventListener("click", function(event){
        event.preventDefault();
        router.navigate('/order')   
    })

    page.append(mainTitle,desc, linkOrder) // create the mainPage to our page
    return page;  // with it function do not work  
}