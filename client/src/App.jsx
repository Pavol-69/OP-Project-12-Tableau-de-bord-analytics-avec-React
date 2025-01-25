// Style
import "./style/generalCSS.scss";
import "./style/App.scss";

// Components
import Header from "./composents/header/Header";
import VerticalBar from "./composents/vertical_bar/VerticalBar";
import Intro from "./composents/Intro";
import Main from "./composents/Main";

// Autre
import { useState, useEffect } from "react";

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
            <Main userId={userId} />
          </div>
        </>
      ) : null}
    </>
  );
}

export default App;
