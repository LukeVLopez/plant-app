
import styles from "./FoodInfo.module.css";

export const FoodInfo = (props) => {
    return (
        <li>
            <h4>{props.name}</h4>
            <p className={styles.fact}>{props.fact}</p>
        </li>
        
    );
  };