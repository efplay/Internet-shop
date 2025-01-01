import './pageContainer.css'
export function getPageContainer(){    // create the main container (where we have all html elements)
    const main = document.createElement("main") // create main element in the PageContainer
    main.classList.add("page-container") // add to our html element class

    return main // with it function do not work
}
