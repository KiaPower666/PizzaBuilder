import { sectionHandler } from "./sectionHandler";
import { showPizzaSlice } from "../order/showPizzaslice";
import { addToPizzaObj } from "../pizzaObject";
import { pizzaObj } from "../pizzaObject";


export const inputsChecked = [];

export function vegetablesHandler(e) {
  sectionHandler(e, inputsChecked, 2);
  showPizzaSlice ("vegetables", "square3"); 
  addToPizzaObj(e, "vegetables", 2);
}

