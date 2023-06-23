import {sectionHandler} from './sectionHandler'

export const inputsChecked = [];

export function chooseTwoIngredients(e) {
  sectionHandler(e, inputsChecked, 2);
}
