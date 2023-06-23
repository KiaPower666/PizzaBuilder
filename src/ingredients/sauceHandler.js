import { sectionHandler } from "./sectionHandler";

export const inputsChecked = [];

export function sauceHandler(e) {
  sectionHandler(e, inputsChecked, 1);
}
