// Style
import "../../style/generalCSS.scss";
import "../../style/composents/activity/Activity.scss";
import "../../style/composents/activity/ChartLine.scss";

// Autre
import {
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Line,
  Bar,
  ComposedChart,
} from "recharts";

function ChartLine({ data }) {
  // Ajout des points fictifs
  const extendedData = [
    { day: 0, sessionLength: 50 }, // Point fictif gauche
    ...data, // Points réels
    { day: 8, sessionLength: 50 }, // Point fictif droit
  ];

  function numToDay(n) {
    if (n == 1) {
      return "L";
    } else if (n == 2) {
      return "M";
    } else if (n == 3) {
      return "M";
    } else if (n == 4) {
      return "J";
    } else if (n == 5) {
      return "V";
    } else if (n == 6) {
      return "S";
    } else if (n == 7) {
      return "D";
    } else {
      return "";
    }
  }

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom_line elm_ct ver">
          <p className="min">{`${payload[0].value} min`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="info_ctn chart_line_ctn">
      <div className="bg_wk" style={{ left: `${(100 / 7) * 5}%` }}></div>
      <span className="chart_line_title">Durée moyenne des sessions</span>
      <ResponsiveContainer width={"100%"} height={"100%"}>
        <ComposedChart
          data={extendedData}
          margin={{ top: 75, right: 0, left: 0, bottom: 20 }}
        >
          <Tooltip cursor={false} content={<CustomTooltip />} />
          <XAxis
            dataKey="day"
            type="number"
            interval={0}
            domain={[0.51, 7.49]}
            scale="linear"
            allowDataOverflow={true}
            tickFormatter={(tick) => numToDay(tick)}
            axisLine={false}
            tickLine={false}
            tick={{
              fontSize: 12,
              fontWeight: 500,
              fill: "#ffffff",
              opacity: 0.5,
            }}
            dy={12}
          />

          <Bar />

          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#ffffff" stopOpacity={1} />
            </linearGradient>
          </defs>

          <Line
            dot={false}
            type="monotone"
            dataKey="sessionLength"
            stroke="url(#lineGradient)"
            strokeWidth={2}
            activeDot={{
              r: 4,
              fill: "#ffffff",
              stroke: "#ffffff",
              strokeWidth: 10,
              strokeOpacity: 0.2,
            }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartLine;
