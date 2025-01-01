import {getProductCard } from '/src/main-code/components/productCart/productCart.js'; // Imports the getProductCard function from the productCart.js module to create or get a product card.
import {getMainTitle } from '/src/main-code/components/mainTitle/mainTitle.js'; 
// Main Page 
 export function getMainPage(){  //create html element to main page
    const page = document.createElement("div") // create div element in MainPage
    page.classList.add("page","main-page","container")  // create additional class to out element  page "div"
    const mainTitle = getMainTitle("Main Page") // we create main page in function getMainPage, but it create by other element

    const list = document.createElement("ul") // create ul element in the MainPage
    list.classList.add("product-list", "list-reset") // we create to classes to ul element, that we have product list and list reset (to reset the styles)

    list.append(            // add the product list to our list page
        getProductCard("Product_1",3.56), // add text to our card product
        getProductCard("Product_2",6.76),
        getProductCard("Product_3",2.86),
    )

    page.append(mainTitle,list) // create the mainPage to our page
    return page;  // with it function do not work  
}