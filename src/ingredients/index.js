import styles from "./ingredients.module.scss";
import { addClassFoundById } from "../utils/addClassFoundById";
import { addClassFoundByClass } from "../utils/addClassFoundByClass";
import { doughHandler } from "./doughHandler";
import { sauceHandler } from "./sauceHandler";
import { meatHandler } from "./meatHandler";
import { vegetablesHandler } from "./vegetablesHandler";

addClassFoundById("ingredients", styles.ingredients);
addClassFoundById("ingredients", styles.container);
addClassFoundByClass("input-div", styles.inputdiv);
addClassFoundByClass("input1", styles.input);
addClassFoundByClass("checkbox-label", styles.checkboxlabel);

const doughDiv = document.getElementById("dough");
const sauceDiv = document.getElementById("sauce");
const meatDiv = document.getElementById("meat");
const vegetablesDiv = document.getElementById("vegetables");

doughDiv.addEventListener("click", doughHandler);
sauceDiv.addEventListener("click", sauceHandler);
meatDiv.addEventListener("click", meatHandler);
vegetablesDiv.addEventListener("click", vegetablesHandler);
