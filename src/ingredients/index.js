import styles from "./ingredients.module.scss";
import { addClassFoundById } from "../utils/addClassFoundById";
import { addClassFoundByClass } from "../utils/addClassFoundByClass";
import { chooseOneIngredient } from "./chooseOneIngredient";
import { chooseTwoIngredients } from "./chooseTwoIngredients";


addClassFoundById("ingredients", styles.ingredients);
addClassFoundById("ingredients", styles.container);
addClassFoundByClass("input-div", styles.inputdiv);
addClassFoundByClass("input1", styles.input);
addClassFoundByClass("checkbox-label", styles.checkboxlabel);


const doughDiv = document.getElementById("dough");
const sauceDiv = document.getElementById("sauce");
const meatDiv = document.getElementById("meat");
const vegetablesDiv = document.getElementById("vegetables");


doughDiv.addEventListener("click", chooseOneIngredient);
sauceDiv.addEventListener("click", chooseOneIngredient);
meatDiv.addEventListener("click", chooseTwoIngredients);
vegetablesDiv.addEventListener("click", chooseTwoIngredients);









