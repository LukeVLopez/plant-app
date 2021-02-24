/**
 * A component that displays a fun fact about a plant.
 */
export const PlantInfo = (props) => {
    return (
      <div>
        <h2>{props.name}</h2>
        <p>{props.fact}</p>
      </div>
    );
  };