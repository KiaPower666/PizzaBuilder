import styles from "./order.module.scss";

export function setButtonEnabled() {
  const squareBlocks = Array.from(
    document.getElementsByClassName("squareBlock")
  );
  console.log(squareBlocks);
  const orderButton = document.getElementById("btn");
  const activeBlocks = squareBlocks.filter((squareBlock) =>
    squareBlock.classList.contains(styles.active)
  );
  if (activeBlocks.length === 4) {
    orderButton.disabled = false;
    orderButton.classList.add(styles.enabled);
  } else {
    orderButton.disabled = true;
    orderButton.classList.remove(styles.enabled);
  }
}
