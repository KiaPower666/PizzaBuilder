import {sectionHandler} from './sectionHandler'

export const inputsChecked = [];

export function meatHandler(e) {
  sectionHandler(e, inputsChecked, 2);
}
