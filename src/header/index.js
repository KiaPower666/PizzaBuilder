import styles from './header.module.scss';
import banner from '../../assets/banner.png' 
import {addClassFoundById} from '../helpers/addClassFoundById';
import { addBackground } from '../helpers/addbackground';



addClassFoundById("header", styles.header);
addClassFoundById("header", styles.container);
addBackground("header", banner)


