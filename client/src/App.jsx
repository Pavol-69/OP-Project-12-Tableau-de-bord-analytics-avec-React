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

  useEffect(() => {
    const userId = "12";

    try {
      database
        .user(userId)
        .info()
        .then((res) => {
          setInfo(res);
          if (res.todayScore) {
            setTodayScore(res.todayScore * 100);
          } else if (res.score) {
            setTodayScore(res.score * 100);
          } else {
            setTodayScore(0);
          }
        });
      database
        .user(userId)
        .activity()
        .then((res) => {
          setActivity(res);
        });
      database
        .user(userId)
        .averageSession()
        .then((res) => {
          setAverageSession(res);
        });
      database
        .user(userId)
        .performance()
        .then((res) => {
          setPerf(res);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

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
