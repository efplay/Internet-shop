import Navigo from 'navigo'// Imports the Navigo library to create and manage routing in a web application.

import {getHeader} from '/src/main-code/components/header/header.js'; // Imports the {f()} function from the /... module to create or get the main title of the page.
import {getPageContainer} from '/src/main-code/components/pageContainer/pageContainer.js'; // Imports the {f()} function from the /... module to create or get the main title of the page.

const app = document.getElementById("app") // create our head element app - we have all in this element

export const router = new Navigo('/'); // create the variable the router, the library to replace with items 
 
const header = getHeader() // call the function getHeader
const pageContainer = getPageContainer() // call the function pageContainer - PageContainer

router.on('/', async() => {
    pageContainer.innerHTML = ""
    const moduleMain = await import('/src/main-code/pages/main.js');
    const mainPage = moduleMain.getMainPage() // call the function mainPage - MainPage
    pageContainer.append(mainPage) // we create variable (mainPage) in pageContainer
    // Fired if the page URL matches '/foo/bar'.
    header.setActiveLink("home")
});
router.on('/directoryPage', async() =>{
    pageContainer.innerHTML = ""
    const moduleDirectory = await import('/src/main-code/pages/directoryPage.js') // The module will be loaded, and then the pageModule object will contain all exports from that file.
    const directoryPage = moduleDirectory.getDirectoryPage()// you call getDirectoryPage(), which is probably exported in the directoryPage.js module
    pageContainer.append(directoryPage) // we create variable (productPage) in pageContainer
    header.setActiveLink("directoryPage")
});
router.on('/product/:title', async({data}) =>{
    console.log(data.title)
     //is a method that listens for URL changes and calls a specific function when the user goes to the specified route.
    //'/' is the path that will be tracked. In this case, / corresponds to the root page of your web application
    // () => { ... } is an arrow function that will be executed when the user gets to the specified route (/).
    pageContainer.innerHTML = ""
    const moduleProduct = await import('/src/main-code/pages/product.js')  // the same in prev
    const productPage = moduleProduct.getProductPage(data.title)// call the function cartPage
    pageContainer.append(productPage) // we create variable (productPage) in pageContainer
    header.setActiveLink()
});

router.on('/cartPage', async() =>{
    //is a method that listens for URL changes and calls a specific function when the user goes to the specified route.
   //'/' is the path that will be tracked. In this case, / corresponds to the root page of your web application
   // () => { ... } is an arrow function that will be executed when the user gets to the specified route (/).
   pageContainer.innerHTML = ""
   const moduleCart = await import('/src/main-code/pages/cartPage.js')  // the same in prev
   const cartPage = moduleCart.getCartPage()// call the function cartPage
   pageContainer.append(cartPage) // we create variable (productPage) in pageContainer
   header.setActiveLink("cartPage")
});

router.on('/order', async() =>{
    //is a method that listens for URL changes and calls a specific function when the user goes to the specified route.
   //'/' is the path that will be tracked. In this case, / corresponds to the root page of your web application
   // () => { ... } is an arrow function that will be executed when the user gets to the specified route (/).
    if (true) {
        router.navigate('/');
        return 
    }

   pageContainer.innerHTML = ""
   const moduleOrder = await import('/src/main-code/pages/order.js')  // the same in prev
   const orderPage = moduleOrder.getOrderPage()// call the function cartPage
   pageContainer.append(orderPage) // we create variable (productPage) in pageContainer
   header.setActiveLink()
});

router.notFound(async() =>{ // Page not found
    pageContainer.innerHTML = ""
    const moduleNotFound = await import('/src/main-code/pages/404.js')  // the same in prev
    const notFoundPage = moduleNotFound.getNotFoundPage()// call the function cartPage
    pageContainer.append(notFoundPage) // we create variable (productPage) in pageContainer
    header.setActiveLink()
 })

router.resolve(); // info : 
//  router library checks the current URL (or the one you specify if you pass a path) and runs the appropriate processing for that route.
app.append(header.header, pageContainer) // create the html elements 