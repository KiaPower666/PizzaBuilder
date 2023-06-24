import styles from './header.module.scss';
import banner from '../../assets/banner.png' 
import {addClassFoundById} from '../utils/addClassFoundById';
import { addBackground } from '../utils/addBackground';



addClassFoundById("header", styles.header);
addClassFoundById("header", styles.container);
addBackground("header", banner)


