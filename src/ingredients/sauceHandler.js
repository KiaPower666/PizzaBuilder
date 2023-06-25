import { sectionHandler } from "./sectionHandler";
import { showPizzaSlice } from "../order/showPizzaslice";

export const inputsChecked = [];

export function sauceHandler(e) {
  sectionHandler(e, inputsChecked, 1);
  showPizzaSlice ("sauce", "square4"); 
}
