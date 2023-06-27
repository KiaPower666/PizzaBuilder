import styles from "./orderList.module.scss";
import { addClassFoundById } from "../utils/addClassFoundById";
import { ingredients } from "./ingredients";
import { inputsChecked as inputsCheckedDough } from "../ingredients/doughHandler";
import { inputsChecked as inputsCheckedMeat } from "../ingredients/meatHandler";
import { inputsChecked as inputsCheckedVegetables } from "../ingredients/vegetablesHandler";
import { inputsChecked as inputsCheckedSauce } from "../ingredients/sauceHandler";
import { showPizzaSlice } from "../order/showPizzaslice";
import { setButtonEnabled } from "../order/setButtonEnabled";
import { pizzaObj } from "../pizzaObject";

addClassFoundById("wrapper-main", styles.wrapper);
addClassFoundById("wrapper-main", styles.container);
addClassFoundById("viewingarea", styles.viewingarea);
addClassFoundById("price-block", styles.price);

const orderList = document.getElementById("order-list");
const ingredientsContainer = document.getElementById("ingredients");
const inputs = document.querySelectorAll(".input1");

ingredientsContainer.addEventListener("click", () => {
  const inputsChecked = Array.from(inputs).filter((input) => input.checked);
  updateOrderList(inputsChecked);
  price();
});

function updateOrderList(inputsChecked) {
  orderList.innerHTML = "";
  inputsChecked.forEach((input) => {
    const labelText = input.nextElementSibling.textContent;
    const inputId = input.id;
    const liId = inputId + "_order";
    const ingredientItem = document.createElement("li");
    ingredientItem.id = liId;
    ingredientItem.textContent = labelText;
    orderList.appendChild(ingredientItem);
  });
}

orderList.addEventListener("click", removeFromOrderList);

function removeFromOrderList(event) {
  if (event.target.tagName !== "li") return;
  const inputId = event.target.id.slice(0, -6); 
  const input = document.getElementById(inputId); 
  const sectionId = inputId.slice(0, -3); 
  input.checked = false;
  event.target.remove();
  price();

  switch (sectionId) {
    case "dough":
      const foundInputIndex1 = inputsCheckedDough.findIndex(
        (elem) => elem === input
      );
      inputsCheckedDough.splice(foundInputIndex1, 1);
      showPizzaSlice("dough", "square1");
      setButtonEnabled();
      removeFromPizzaObject(event, sectionId);
      break;
    case "meat":
      const foundInputIndex2 = inputsCheckedMeat.findIndex(
        (elem) => elem === input
      );
      inputsCheckedMeat.splice(foundInputIndex2, 1);
      showPizzaSlice("meat", "square2");
      setButtonEnabled();
      removeFromPizzaObject(event, sectionId);
      break;
    case "vegetables":
      const foundInputIndex3 = inputsCheckedVegetables.findIndex(
        (elem) => elem === input
      );
      inputsCheckedVegetables.splice(foundInputIndex3, 1);
      showPizzaSlice("vegetables", "square3");
      setButtonEnabled();
      removeFromPizzaObject(event, sectionId);
      break;
    case "sauce":
      const foundInputIndex4 = inputsCheckedSauce.findIndex(
        (elem) => elem === input
      );
      inputsCheckedSauce.splice(foundInputIndex4, 1);
      showPizzaSlice("sauce", "square4");
      setButtonEnabled();
      removeFromPizzaObject(event, sectionId);
      break;
  }
}
function removeFromPizzaObject(event, sectionId) {
  const index = pizzaObj[sectionId].findIndex(
    (el) => el === event.target.textContent
  );
  pizzaObj[sectionId].splice(index, 1);
}

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
