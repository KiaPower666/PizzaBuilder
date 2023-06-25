import { sectionHandler } from "./sectionHandler";
import { showPizzaSlice } from "../order/showPizzaslice";

export const inputsChecked = [];

export function doughHandler(e) {
  sectionHandler(e, inputsChecked, 1);
  showPizzaSlice ("dough", "square1"); 
}
