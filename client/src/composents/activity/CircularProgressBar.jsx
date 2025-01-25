// Style
import "../../style/generalCSS.scss";
import "../../style/composents/Main.scss";
import "../../style/composents/activity/CircularProgressBar.scss";

// Autre
import { PieChart, Pie, Cell } from "recharts";

function CircularProgressBar({ todayScore }) {
  const data = [
    { name: "Group B", value: todayScore },
    { name: "Group A", value: 100 - todayScore },
  ];

  const COLORS = ["#FF0000", "#FBFBFB"];

  return (
    <div className="info_ctn circular_progress_bar_ctn elm_ct">
      <PieChart
        width={194}
        height={194}
        style={{ transform: "rotate(-90deg)" }}
      >
        <circle cx="50%" cy="50%" r="87" fill="white" />
        <Pie
          data={data}
          innerRadius={87}
          outerRadius={97}
          cornerRadius={40}
          dataKey="value"
          stroke=""
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <div className="cir_txt_ctn ver">
        <span>{`${todayScore}%`}</span>
        <p>de votre objectif</p>
      </div>
    </div>
  );
}

export default CircularProgressBar;
