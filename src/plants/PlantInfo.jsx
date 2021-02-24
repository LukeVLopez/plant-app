import styles from "./PlantInfo.module.css";

/**
 * A component that displays a fun fact about a plant.
 */
export const PlantInfo = (props) => {
  return (
    <div className={styles.plantinfo}>
      <h2>{props.name}</h2>
      <p className={styles.fact}>{props.fact}</p>
    </div>
  );
};