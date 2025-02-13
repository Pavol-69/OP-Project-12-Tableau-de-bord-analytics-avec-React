import "../../style/generalCSS.scss";
import "../../style/composents/alimentation/Alimentation.scss";
import AlimentationCard from "../alimentation/AlimentationCard"; // sinon il veut passer par /alimentation
import energy from "../../assets/energy.svg";
import cheeseburger from "../../assets/cheeseburger.svg";
import apple from "../../assets/apple.svg";
import protein from "../../assets/protein.svg";

function Alimentation({ info }) {
  return info.id ? (
    <div className="alim_ctn ver">
      <AlimentationCard
        icon={energy}
        color={"#FF0000"}
        opacity={0.061}
        qty={(info.keyData.calorieCount / 1000)
          .toFixed(3)
          .toString()
          .replace(".", ",")}
        unit={"kCal"}
        type={"Calories"}
      />
      <AlimentationCard
        icon={protein}
        color={"#4AB8FF"}
        opacity={0.1}
        qty={info.keyData.proteinCount}
        unit={"g"}
        type={"Proteines"}
      />
      <AlimentationCard
        icon={apple}
        color={"#F9CE23"}
        opacity={0.1017}
        qty={info.keyData.carbohydrateCount}
        unit={"g"}
        type={"Glucides"}
      />
      <AlimentationCard
        icon={cheeseburger}
        color={"#FD5181"}
        opacity={0.1}
        qty={info.keyData.lipidCount}
        unit={"g"}
        type={"Lipides"}
      />
    </div>
  ) : (
    <></>
  );
}

export default Alimentation;
