import { sectionHandler } from "./sectionHandler";
import { showPizzaSlice } from "../order/showPizzaslice";

export const inputsChecked = [];

export function vegetablesHandler(e) {
  sectionHandler(e, inputsChecked, 2);
  showPizzaSlice ("vegetables", "square3"); 
}
