// Style
import "./style/generalCSS.scss";
import "./style/App.scss";

// Components
import Header from "./composents/header/Header";
import VerticalBar from "./composents/vertical_bar/VerticalBar";
import Intro from "./composents/Intro";
import Main from "./composents/Main";
import user from "./database/database";

// Autre
import { useState, useEffect } from "react";

function App() {
  const userId = 12;
  //const id = useParams().log_id;
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        setUserData(await new user(userId).init());
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <>
      <VerticalBar />
      <Header />
      <div className="main_ctn ver">
        {userData.info &&
        userData.activity &&
        userData.averageSession &&
        userData.perf ? (
          <>
            <Intro info={userData.info} />
            <Main
              activity={userData.activity}
              averageSession={userData.averageSession}
              perf={userData.perf}
              todayScore={userData.info.todayScore}
              info={userData.info}
            />
          </>
        ) : (
          <div>Erreur connexion serveur.</div>
        )}
      </div>
    </>
  );
}

export default App;
