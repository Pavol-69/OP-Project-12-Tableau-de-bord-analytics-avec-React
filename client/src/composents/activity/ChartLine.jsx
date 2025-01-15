// Style
import "../../style/generalCSS.scss";
import "../../style/composents/activity/Activity.scss";
import "../../style/composents/activity/ChartLine.scss";

// Autre
import { XAxis, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

function ChartLine({ data }) {
  // Besoin de rajouter une valeur
  if (data[0].day > 0.5) {
    data.unshift({ day: 0.5, sessionLength: 50 });
    data.push({ day: 7.5, sessionLength: 50 });
  }

  //newData = newData.push({ day: 7.5, sessionLength: 50 });

  return (
    <div className="info_ctn chart_line_ctn">
      <ResponsiveContainer width={"100%"} height={250}>
        <LineChart
          data={data}
          margin={{ top: 50, right: 0, left: 0, bottom: 0 }}
        >
          <XAxis dataKey="day" />
          <Tooltip cursor={false} />
          <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartLine;
