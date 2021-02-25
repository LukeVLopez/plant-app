/**
 * It should...
 *   - Have your name as the heading
 *   - Include a short description
 *   - Include a photo of you
 *   - Have a bullet list of your top three favorite baked goods (ONLY 3)
 *
 * Technical requirements:
 *   - Use CSS (foo.module.css file, like in PlantInfo)
 *   - Use at least one component that is defined outside this file
 */

import { FoodInfo } from "../src/luciano/FoodInfo";
import styles from "./luciano.module.css";

const LucianoPage = () => {
  return (
    <div className={styles.LucianoPage}>
      <h1>Luciano Victor Jose Lopez</h1>
      <p>
        I live in Seattle, Washington, where I recently moved to. Before, I
        lived in Michigan.
        <br />I like to cook, bake, do art, and watch Youtube.
      </p>
      <br />
      <p>Some baked goods that I like are:</p>
      <ul>
        <FoodInfo name="Focaccia" fact="Very oily."></FoodInfo>
        <FoodInfo name="Banana Cake" fact="Moist and delicious."></FoodInfo>
        <FoodInfo name="Oatmeal Cookies" fact="A sometimes treat."></FoodInfo>
      </ul>
      <br />
      <img id="pic" src="Luciano.selfie.JPG" height="250"></img> <br />
      <img id="pic" src="Walter1.JPG" height="250"></img> <br />
      <img id="pic" src="Sylvia1.JPG" height="250"></img>
    </div>
  );
};

export default LucianoPage;
