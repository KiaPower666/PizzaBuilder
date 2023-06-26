import { sectionHandler } from "./sectionHandler";
import { showPizzaSlice } from "../order/showPizzaslice";
import { addToPizzaObj } from "../pizzaObject";
import { pizzaObj } from "../pizzaObject";

export const inputsChecked = [];

export function doughHandler(e) {
  sectionHandler(e, inputsChecked, 1);
  showPizzaSlice ("dough", "square1"); 
  addToPizzaObj(e, "dough", 1);
}
