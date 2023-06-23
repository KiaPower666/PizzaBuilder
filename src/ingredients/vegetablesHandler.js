import {sectionHandler} from './sectionHandler'

export const inputsChecked = [];

export function vegetablesHandler(e) {
  sectionHandler(e, inputsChecked, 2);
}
