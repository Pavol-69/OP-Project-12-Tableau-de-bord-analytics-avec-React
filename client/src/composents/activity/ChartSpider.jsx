// Style
import "../../style/generalCSS.scss";
import "../../style/composents/activity/Activity.scss";
import "../../style/composents/activity/ChartSpider.scss";

// Autre
import { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  Text,
} from "recharts";

function ChartLine({ data }) {
  const [value, setValue] = useState({});

  useEffect(() => {
    setValue(reverse(data.data));
  }, [data]);

  function toFrench(word) {
    if (word == "cardio") {
      return "Cardio";
    } else if (word == "energy") {
      return "Energie";
    } else if (word == "endurance") {
      return "Endurance";
    } else if (word == "strength") {
      return "Force";
    } else if (word == "speed") {
      return "Vitesse";
    } else if (word == "intensity") {
      return "Intensité";
    }
  }

  function reverse(array) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
      newArray.push(array[array.length - 1 - i]);
    }

    return newArray;
  }

  function renderPolarAngleAxis({ payload, x, y, cx, cy, ...rest }) {
    return (
      <Text
        {...rest}
        verticalAnchor="middle"
        y={y + (y - cy) / 20}
        x={x + (x - cx) / 20}
      >
        {payload.value}
      </Text>
    );
  }

  return value.length > 0 ? (
    <div className="info_ctn chart_spider_ctn">
      <ResponsiveContainer width={"100%"} height={"100%"}>
        <RadarChart
          outerRadius="80%"
          data={value}
          margin={{ top: 25, right: 25, left: 25, bottom: 25 }}
        >
          <PolarGrid stroke="#FFFFFF" gridType="polygon" radialLines={false} />
          <PolarAngleAxis
            dataKey={(val) => {
              return toFrench(data.kind[val.kind]);
            }}
            stroke="#FFFFFF"
            tickLine={false}
            tick={(props) => renderPolarAngleAxis(props)}
          />
          <Radar dataKey={"value"} fill="red" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  ) : (
    <></>
  );
}

export default ChartLine;
