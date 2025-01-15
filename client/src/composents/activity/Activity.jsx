// Style
import "../../style/generalCSS.scss";
import "../../style/composents/activity/Activity.scss";

// Database
import database from "../../database/database";

// Components
import ChartBar from "./ChartBar";
import ChartLine from "./ChartLine";
import ChartSpider from "./ChartSpider";
import CircularProgressBar from "./CircularProgressBar";

// Autre
import { useState, useEffect } from "react";

function Activity({ userId }) {
  const [activity, setActivity] = useState({});
  const [averageSession, setAverageSession] = useState({});
  const [perf, setPerf] = useState({});
  const [todayScore, setTodayScore] = useState(0);

  useEffect(() => {
    database
      .user(userId)
      .activity()
      .then((res) => {
        setActivity(res.data);
      });
    database
      .user(userId)
      .averageSession()
      .then((res) => {
        setAverageSession(res.data);
      });
    database
      .user(userId)
      .performance()
      .then((res) => {
        setPerf(res.data);
      });
    database
      .user(userId)
      .info()
      .then((res) => {
        if (res.data.todayScore) {
          setTodayScore(res.data.todayScore * 100);
        } else if (res.data.score) {
          setTodayScore(res.data.score * 100);
        } else {
          setTodayScore(0);
        }
      });
  }, [userId]);

  return activity.userId && averageSession.userId && perf.userId ? (
    <div className="act_ctn elm_ct ver">
      <ChartBar data={activity.sessions} />
      <div className="act_sub_ctn elm_ct hor">
        <ChartLine data={averageSession.sessions} />
        <ChartSpider data={perf} />
        <CircularProgressBar todayScore={todayScore} />
      </div>
    </div>
  ) : (
    <></>
  );
}

export default Activity;
