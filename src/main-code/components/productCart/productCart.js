import './productCart.css'
import {router} from "/src/main-code/main.js"// Imports a router instance from the main.js file for use in the web application routing.
// create the function  to our product , that we will have a product card
 export function getProductCard(title,price){ // we have two options of this function, that he have get title and price
    const item = document.createElement("li") // create the element of table (li)
    item.classList.add("product-list_item")  // added class

    const titleElement = document.createElement("h2") // create the html element
    titleElement.classList.add("product-list_title") // add the class 

    let productLink = document.createElement('a')
    productLink.textContent = title
    productLink.href=""; // add the links where we have URL page
    //productLink.setAttribute("data-navigo" , "true")//adds the data-navigo attribute with a value of “true” to the productLink HTML element, or changes its value if the attribute already exists.  
    productLink.addEventListener("click", function(event){
        event.preventDefault()
        router.navigate(`/product/${title}`);
    })    

    titleElement.append(productLink)

    const priceElement = document.createElement("strong") // create the html element
    priceElement.classList.add("product-list_price") // add the class 
    priceElement.textContent = `${price} dollars` // add text in price to our title



    const addBasket  /*btn*/ = document.createElement("button")
    addBasket.classList.add("btn") // add the class 
    addBasket.textContent = "In the basket" //add text to our variable
    item.append(titleElement,priceElement, addBasket)
    return item;  // return our function
}