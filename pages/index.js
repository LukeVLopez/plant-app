import Head from "next/head";
import styles from "./Home.module.css";
import { PlantInfo } from "../src/plants/PlantInfo";

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
