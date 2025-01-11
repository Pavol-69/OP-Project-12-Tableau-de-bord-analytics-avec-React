// Style
import "../../style/generalCSS.scss";
import "../../style/composents/activity/Activity.scss";

// Database
import database from "../../database/database";

// Components
import ChartBar from "./ChartBar";
//import ChartLine from "./ChartLine";
//import ChartSpider from "./ChartSpider";
//import CircularProgressBar from "./CircularProgressBar";

// Autre
import { useState, useEffect } from "react";

function Activity({ userId }) {
  const [activity, setActivity] = useState({});

  useEffect(() => {
    database
      .user(userId)
      .activity()
      .then((res) => {
        setActivity(res.data);
      });
  }, [userId]);

  return activity.userId ? (
    <div className="act_ctn">
      <ChartBar data={activity.sessions} />
    </div>
  ) : (
    <></>
  );
}

/*<ChartLine data={activity.sessions} />
      <ChartSpider data={activity.sessions} />
      <CircularProgressBar /> */

export default Activity;
