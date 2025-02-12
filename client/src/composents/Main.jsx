// Style
import "../style/generalCSS.scss";
import "../style/composents/Main.scss";

// Database
import database from "../database/database";

// Components
import ChartBar from "./activity/ChartBar";
import ChartLine from "./activity/ChartLine";
import ChartSpider from "./activity/ChartSpider";
import CircularProgressBar from "./activity/CircularProgressBar";
import Alimentation from "./alimentation/Alimentation";

// Autre
import { useState, useEffect } from "react";

function Main({ userId }) {
  const [activity, setActivity] = useState({});
  const [averageSession, setAverageSession] = useState({});
  const [perf, setPerf] = useState({});
  const [todayScore, setTodayScore] = useState(0);

  useEffect(() => {
    database
      .user(userId)
      .activity()
      .then((res) => {
        console.log(res);
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
    database
      .user(userId)
      .info()
      .then((res) => {
        if (res.todayScore) {
          setTodayScore(res.todayScore * 100);
        } else if (res.score) {
          setTodayScore(res.score * 100);
        } else {
          setTodayScore(0);
        }
      });
  }, [userId]);

  return activity.userId && averageSession.userId && perf.userId ? (
    <div className="act_ctn">
      <ChartBar data={activity.sessions} />
      <div className="act_sub_ctn elm_ct hor">
        <ChartLine data={averageSession.sessions} />
        <ChartSpider data={perf} />
        <CircularProgressBar todayScore={todayScore} />
      </div>
      <Alimentation userId={userId} />
    </div>
  ) : (
    <></>
  );
}

export default Main;
