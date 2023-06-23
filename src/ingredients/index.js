import styles from "./ingredients.module.scss";
import { addClassFoundById } from "../helpers/addClassFoundById";
import { addClassFoundByClass} from '../helpers/addClassFoundByClass';
/* import { addBackground } from '../helpers/addbackground'; */

addClassFoundById("ingredients", styles.ingredients);
addClassFoundById("ingredients", styles.container);
addClassFoundByClass("input-div", styles.inputdiv);
addClassFoundByClass("input1", styles.input);
addClassFoundByClass("checkbox-label", styles.checkboxlabel);

class Pizza {
    constructor() {
      this.ingredients = {
        dough: [],
        meat: [],
        vegetables: [],
        sauce: []
      };
      this.price = 23;
    }
  
    addIngredient(category, ingredient) {
      this.ingredients[category].push(ingredient);
    }
  
    removeIngredient(category, ingredient) {
      const index = this.ingredients[category].indexOf(ingredient);
      if (index > -1) {
        this.ingredients[category].splice(index, 1);
      }
    }
  
    calculatePrice() {
      // Calculate the price based on the selected ingredients
      // Implementation logic goes here
      // ...
      return this.price;
    }
  }

