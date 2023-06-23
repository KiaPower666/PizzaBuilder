import styles from "./order.module.scss";
import { addClassFoundById } from "../utils/addClassFoundById";
import imgPizza from "../../assets/pizza.png";

const pizzaImg = document.getElementById("pizzaImg");
pizzaImg.src = imgPizza;



addClassFoundById("order", styles.order);
addClassFoundById("ordersquare", styles.ordersquare);
addClassFoundById("btn", styles.btn);
addClassFoundById("square1", styles.square1);
addClassFoundById("square2", styles.square2);
addClassFoundById("square3", styles.square3);
addClassFoundById("square4", styles.square4);

