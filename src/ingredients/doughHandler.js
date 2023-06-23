import { sectionHandler } from "./sectionHandler";

export const inputsChecked = [];

export function doughHandler(e) {
  sectionHandler(e, inputsChecked, 1);
}
