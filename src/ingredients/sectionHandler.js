import { setIngredientsUnchecked } from "../utils/setIngredientsUnchecked";

export function sectionHandler(e, inputsChecked, num) {
  e.preventDefault();
  if (!e.target.classList.contains("checkbox-label")) return;
  const input = e.target.previousElementSibling;
  const inputId = input.id;

  if (input.checked) {
    input.checked = false;
    const index = inputsChecked.findIndex((input) => input.id === inputId);
    inputsChecked.splice(index, 1);
  } else {
    input.checked = true;
    inputsChecked.push(input);
    setIngredientsUnchecked(inputsChecked, input, num);
  }
}
