import styles from "./ingredients.module.scss";
import { addClassFoundById } from "../utils/addClassFoundById";
import { addClassFoundByClass} from '../utils/addClassFoundByClass';



addClassFoundById("ingredients", styles.ingredients);
addClassFoundById("ingredients", styles.container);
addClassFoundByClass("input-div", styles.inputdiv);
addClassFoundByClass("input1", styles.input);
addClassFoundByClass("checkbox-label", styles.checkboxlabel);





