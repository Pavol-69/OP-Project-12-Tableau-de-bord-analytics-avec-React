import "../../style/generalCSS.scss";
import "../../style/composents/activity/ChartBar.scss";
import ChartBarLegend from "./ChartBarLegend";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function ChartBar({ data }) {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip elm_ct ver">
          <p className="value">{`${payload[0].value}kg`}</p>
          <p className="value">{`${payload[1].value}Kcal`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="chart_bar_ctn ver">
      <div className="chart_bar_header">
        <span className="chart_bar_ctn_title">Activité quotidienne</span>
        <div className="legend_bar_chart_ctn">
          <ChartBarLegend color={"#282D30"} legend={"Poids (kg)"} />
          <ChartBarLegend
            color={"#E60000"}
            legend={"Calories brûlées (kCal)"}
          />
        </div>
      </div>
      <ResponsiveContainer width={"100%"} height={250}>
        <BarChart
          data={data}
          margin={{
            top: 50,
            right: 0,
            left: 0,
            bottom: 0,
          }}
          barGap={7}
        >
          <CartesianGrid
            vertical={false}
            strokeDasharray="2 2"
            stroke="#DEDEDE"
          />
          <XAxis
            dataKey={(val) => new Date(`${val.day}`).getDate()}
            tickLine={false}
            axisLine={{ stroke: "#DEDEDE" }}
            tick={{
              fill: "#9B9EAC",
              fontSize: "14",
              fontWeight: "500",
              dy: 10,
            }}
          />
          <YAxis
            dataKey="calories"
            orientation="right"
            tickLine={false}
            axisLine={false}
            tick={{
              fill: "#9B9EAC",
              fontSize: "14",
              fontWeight: "500",
              dx: 10,
            }}
            interval="preserveEnd"
          />
          <Tooltip
            cursor={{ fill: "#C4C4C4", opacity: 0.5 }}
            content={<CustomTooltip />}
          />
          <Bar
            dataKey="kilogram"
            fill="#282D30"
            barSize={7}
            radius={[3, 3, 0, 0]}
          />
          <Bar
            dataKey="calories"
            fill="#E60000"
            barSize={7}
            radius={[3, 3, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartBar;
