import {sectionHandler} from './sectionHandler'

export const inputsChecked = [];

export function chooseOneIngredient(e) {
  sectionHandler(e, inputsChecked, 1);
}

