export const pizzaObj = {
  dough: [],
  meat: [],
  vegetables: [],
  sauce: [],
};

export function addToPizzaObj(e, sectionName, num) {
  if (e.target.tagName !== "LABEL") return;
  if (e.target.previousElementSibling.checked) {
    pizzaObj[sectionName].push(e.target.textContent);
    if (pizzaObj[sectionName].length > num) {
      pizzaObj[sectionName].splice(0, 1);
    }
  } else {
    pizzaObj[sectionName].splice(0, 1);
  }
}
