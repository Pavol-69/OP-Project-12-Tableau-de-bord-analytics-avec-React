// Style
import "../style/generalCSS.scss";
import "../style/composents/Intro.scss";

// Database
import database from "../database/database";

// Autre
import { useState, useEffect } from "react";

function Intro({ userId }) {
  const [info, setInfo] = useState({});

  useEffect(() => {
    database
      .user(userId)
      .info()
      .then((res) => setInfo(res.data));
  }, [userId]);

  return info.id ? (
    <div className="intro_ctn ver">
      <h1>
        Bonjour <span>{info.userInfos.firstName}</span>
      </h1>
      <span className="intro_msg">
        Félicitations ! Vous avez explosé vos objectifs hier 👏
      </span>
    </div>
  ) : (
    <></>
  );
}

export default Intro;
