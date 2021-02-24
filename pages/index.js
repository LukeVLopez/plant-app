import Head from "next/head";
import styles from "../styles/Home.module.css";

/**
 * A component that displays a fun fact about a plant.
 */
const PlantInfo = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.fact}</p>
    </div>
  );
};

export default function Home() {
  return (
    <div className={styles.container}>
      <PlantInfo name="Aloe" fact="Aloe has healing properties!" />
      <PlantInfo name="Lithops" fact="Lithops are known as mimicry plants." />
      <PlantInfo
        name="Daisies"
        fact="If you don't compliment this site, you're gonna be pushin' them up."
      />
    </div>
  );
}
