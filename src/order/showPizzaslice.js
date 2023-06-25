import { addClassFoundById } from "../utils/addClassFoundById";
import { removeClassFoundById } from "../utils/removeClassFoundById";
import styles from "../order/order.module.scss";

export function showPizzaSlice(sectionId, nameOfClass) {
  const sectionDiv = document.getElementById(sectionId);
  const inputs = Array.from(sectionDiv.querySelectorAll(".input1"));
  const checkedArr = inputs.filter((input) => input.checked);

  if (checkedArr.length !== 0) {
    addClassFoundById(nameOfClass, styles.active);
  } else {
    removeClassFoundById(nameOfClass, styles.active);
  }
}
