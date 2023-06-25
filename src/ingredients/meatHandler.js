import { sectionHandler } from "./sectionHandler";
import { showPizzaSlice } from "../order/showPizzaslice";



export const inputsChecked = [];

export function meatHandler(e) {
  sectionHandler(e, inputsChecked, 2);
  showPizzaSlice ("meat", "square2"); 
}
