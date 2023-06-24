import styles from "./orderList.module.scss";
import { addClassFoundById } from "../utils/addClassFoundById";

addClassFoundById("wrapper-main", styles.wrapper);
addClassFoundById("wrapper-main", styles.container);
addClassFoundById("viewingarea", styles.viewingarea);
addClassFoundById("price-block", styles.price);

const ingredientsDiv = document.getElementById('ingredients');
const orderList = document.getElementById('order-list');

ingredientsDiv.ingredients
addEventListener('click', (e) => {
  
const inputs = document.querySelectorAll('.input1');
  const inputsChecked = Array.from(inputs).filter((input) => input.checked);
  
 
updateOrderList(inputsChecked);
});

function updateOrderList(inputsChecked) {
  orderList.innerHTML = ""; 
  inputsChecked.forEach((input) => {
    
   
const labelText = input.nextElementSibling.textContent;
    
   
const ingredientItem = document.createElement('li');
    ingredientItem.
   
textContent = labelText;
    orderList.
   
appendChild(ingredientItem);
  });
}