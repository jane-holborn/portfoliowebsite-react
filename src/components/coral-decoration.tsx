import crab from "../assets/crab.svg";
import seaweedLarge from "../assets/seaweed-large.svg";

export const CoralDecoration = () => {
  return (
    <div className="coralBackground">
      <img className="crab" src={crab} alt="Crab Image" />
      <img className="seaweed" src={seaweedLarge} alt="Seaweed Image" />
    </div>
  );
};
