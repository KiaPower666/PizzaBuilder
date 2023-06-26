import { sectionHandler } from "./sectionHandler";
import { showPizzaSlice } from "../order/showPizzaslice";
import { addToPizzaObj } from "../pizzaObject";
import { pizzaObj } from "../pizzaObject";



export const inputsChecked = [];

export function meatHandler(e) {
  sectionHandler(e, inputsChecked, 2);
  showPizzaSlice ("meat", "square2"); 
  addToPizzaObj(e, "meat", 2)
  console.log(pizzaObj)
}
