// Style
import "../../style/generalCSS.scss";
import "../../style/composents/alimentation/Alimentation.scss";

// Database
import database from "../../database/database";

// Components
import AlimentationCard from "../alimentation/AlimentationCard"; // sinon il veut passer par /alimentation

// Assets
import energy from "../../assets/energy.svg";
import cheeseburger from "../../assets/cheeseburger.svg";
import apple from "../../assets/apple.svg";
import protein from "../../assets/protein.svg";

// Autre
import { useState, useEffect } from "react";

function Alimentation({ userId }) {
  const [info, setInfo] = useState({});

  useEffect(() => {
    database
      .user(userId)
      .info()
      .then((res) => setInfo(res));
  }, [userId]);

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
