import "../style/generalCSS.scss";
import "../style/composents/Main.scss";
import ChartBar from "./activity/ChartBar";
import ChartLine from "./activity/ChartLine";
import ChartSpider from "./activity/ChartSpider";
import CircularProgressBar from "./activity/CircularProgressBar";
import Alimentation from "./alimentation/Alimentation";

function Main({ activity, averageSession, perf, todayScore, info }) {
  return activity.userId && averageSession.userId && perf.userId ? (
    <div className="act_ctn">
      <ChartBar data={activity.sessions} />
      <div className="act_sub_ctn elm_ct hor">
        <ChartLine data={averageSession.sessions} />
        <ChartSpider data={perf} />
        <CircularProgressBar todayScore={todayScore} />
      </div>
      <Alimentation info={info} />
    </div>
  ) : (
    <></>
  );
}

export default Main;
