import { sectionHandler } from "./sectionHandler";
import { showPizzaSlice } from "../order/showPizzaslice";
import { addToPizzaObj } from "../pizzaObject";
import { pizzaObj } from "../pizzaObject";

export const inputsChecked = [];

export function sauceHandler(e) {
  sectionHandler(e, inputsChecked, 1);
  showPizzaSlice ("sauce", "square4"); 
  addToPizzaObj(e, "sauce", 1)
  console.log(pizzaObj)
}

