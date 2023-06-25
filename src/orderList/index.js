import styles from "./orderList.module.scss";
import { addClassFoundById } from "../utils/addClassFoundById";
import { ingredients } from "../orderList/ingredients";

addClassFoundById("wrapper-main", styles.wrapper);
addClassFoundById("wrapper-main", styles.container);
addClassFoundById("viewingarea", styles.viewingarea);
addClassFoundById("price-block", styles.price);

const orderList = document.getElementById("order-list");
const inputsDiv = document.getElementById("ingredients");
const inputs = document.querySelectorAll(".input1");

inputsDiv.addEventListener("click", () => {
  const inputsChecked = Array.from(inputs).filter((input) => input.checked);
  updateOrderList(inputsChecked);
  price();
});

function updateOrderList(inputsChecked) {
  orderList.innerHTML = "";
  inputsChecked.forEach((input) => {
    const labelText = input.nextElementSibling.textContent;
    const ingredientItem = document.createElement("li");
    ingredientItem.textContent = labelText;
    orderList.appendChild(ingredientItem);
  });
}

orderList.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    const ingredientText = event.target.textContent;
    const currentInput = Array.from(inputs).find((input) => {
      const labelText = input.nextElementSibling.textContent;
      return labelText === ingredientText;
    });
    if (currentInput) {
      currentInput.checked = false;
    }
    event.target.remove();
  }
});
function price() { 
  const totalPriceElement = document.getElementById("price");
    let totalPrice = 0;
  
    inputs.forEach((input) => {
      if (input.checked) {
        const labelText = input.nextElementSibling.textContent;
        Object.values(ingredients).forEach((category) => {
          const ingredient = category.find((item) => item.name === labelText);
          if (ingredient) {
            totalPrice += ingredient.price;
          }
        });
      }
    });
    totalPriceElement.textContent = totalPrice + " р.";
  }