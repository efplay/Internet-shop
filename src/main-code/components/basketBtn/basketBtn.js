import {router} from '/src/main-code/main'
import "./basketBtn.css"
import basketSVG from "bundle-text:/src/assets/img/basket.svg" 
    
export function getBasketBtn(){
    const basketBtn=document.createElement("a")
    basketBtn.href = '/cartPage'
    basketBtn.classList.add("basket-btn") 
    basketBtn.innerHTML = basketSVG
    basketBtn.addEventListener('click', function(event) {
        event.preventDefault()
        router.navigate('/cartPage');
    })
    return basketBtn
}
