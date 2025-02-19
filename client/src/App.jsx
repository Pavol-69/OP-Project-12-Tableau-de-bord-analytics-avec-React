// Style
import "./style/generalCSS.scss";
import "./style/App.scss";

// Components
import Header from "./composents/header/Header";
import VerticalBar from "./composents/vertical_bar/VerticalBar";
import Intro from "./composents/Intro";
import Main from "./composents/Main";
import database from "./database/database";

// Autre
import { useState, useEffect } from "react";

function App() {
  const [activity, setActivity] = useState({});
  const [averageSession, setAverageSession] = useState({});
  const [perf, setPerf] = useState({});
  const [todayScore, setTodayScore] = useState(0);
  const [info, setInfo] = useState({});
  const userId = "12";

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        setInfo(await database.user(userId).info());
        if (info.todayScore) {
          setTodayScore(info.todayScore * 100);
        } else if (info.score) {
          setTodayScore(info.score * 100);
        } else {
          setTodayScore(0);
        }

        setActivity(await database.user(userId).activity());
        setAverageSession(await database.user(userId).averageSession());
        setPerf(await database.user(userId).performance());
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchUserInfo();
  }, [info.score, info.todayScore]);

  return (
    <>
      <VerticalBar />
      <Header />
      <div className="main_ctn ver">
        {info.id && activity.userId && averageSession.userId && perf.userId ? (
          <>
            <Intro info={info} />
            <Main
              activity={activity}
              averageSession={averageSession}
              perf={perf}
              todayScore={todayScore}
              info={info}
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
