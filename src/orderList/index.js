import styles from "./orderList.module.scss";
import { addClassFoundById } from "../utils/addClassFoundById";

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