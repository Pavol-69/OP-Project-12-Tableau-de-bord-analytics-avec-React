// Style
import "./style/generalCSS.scss";
import "./style/App.scss";

// Components
import Header from "./composents/header/Header";
import VerticalBar from "./composents/vertical_bar/VerticalBar";
import Intro from "./composents/Intro";
import Activity from "./composents/activity/Activity";

// Autre
import { useState, useEffect } from "react";
import Alimentation from "./composents/Alimentation/Alimentation";

function App() {
  const [userId, setUserId] = useState("");
  useEffect(() => {
    setUserId("12");
  }, []);
  return (
    <>
      {userId != "" ? (
        <>
          <VerticalBar />
          <Header />
          <div className="main_ctn ver">
            <Intro userId={userId} />
            <div className="act_alm_ctn">
              <Activity userId={userId} />
              <Alimentation userId={userId} />
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default App;
