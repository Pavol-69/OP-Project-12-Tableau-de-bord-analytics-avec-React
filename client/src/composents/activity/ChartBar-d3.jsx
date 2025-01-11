// Style
import "../../style/generalCSS.scss";
import "../../style/composents/activity/ChartBar.scss";

// Autre
import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { axisBottom } from "d3-axis";

function ChartBar({ data }) {
  console.log(data);

  /*const [data] = useState([
    { name: "A", value: 50 },
    { name: "B", value: 20 },
    { name: "C", value: 40 },
    { name: "D", value: 70 },
  ]);*/
  // Set up dimensions
  const margin = { top: 0, right: 0, bottom: 0, left: 0 };
  const width = 800;
  const height = 145;
  const svgRef = useRef();

  useEffect(() => {
    // Create SVG container
    const svg = d3.select(svgRef.current);

    // Create scales
    const xScale = d3
      .scaleBand()
      .domain(data.map((d, ind) => ind + 1))
      .range([0, width])
      .padding(0);
    const yScaleCal = d3
      .scaleLinear()
      .domain([
        d3.min(data, (d) => d.calories - 20),
        d3.max(data, (d) => d.calories + 20),
      ])
      .range([height, 0]);
    const yScaleKil = d3
      .scaleLinear()
      .domain([
        d3.min(data, (d) => d.kilogram - 2),
        d3.max(data, (d) => d.kilogram + 2),
      ])
      .range([height, 0]);

    // Create bars
    var multigraph = svg.selectAll(".bar").data(data).enter();

    multigraph
      .append("rect")
      .attr("class", "bar bar_cal")
      .attr("x", (d) => xScale(data.indexOf(d) + 1))
      .attr("y", (d) => yScaleCal(d.calories))
      .attr("width", "7")
      .attr("height", (d) => height - yScaleCal(d.calories))
      .attr("transform", "translate(54, 10)")
      .attr("fill", "red");

    multigraph
      .append("rect")
      .attr("class", "bar bar_kil")
      .attr("x", (d) => xScale(data.indexOf(d) + 1))
      .attr("y", (d) => yScaleKil(d.kilogram))
      .attr("width", "7")
      .attr("height", (d) => height - yScaleKil(d.kilogram))
      .attr("transform", "translate(39, 10)")
      .attr("fill", "black");

    // Create x-axis
    var xAxis = axisBottom(xScale);

    svg
      .append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0,${height + 10})`)

      .call(xAxis);

    // Create y-axis
    /*const yAxisCal = d3.axisLeft(yScaleCal);
    svg
      .append("g")
      .attr("class", "y-axis")
      .attr("transform", "translate(30, 10)")
      .call(yAxisCal);*/
    const yAxisKil = d3.axisRight(yScaleKil);
    svg
      .append("g")
      .attr("class", "y-axis")
      .attr("transform", `translate(${width}, 10)`)
      .call(yAxisKil);
  }, []);

  return (
    <div className="chart_bar_ctn">
      <svg
        ref={svgRef}
        width={width + margin.left + margin.right}
        height={height + margin.top + margin.bottom}
      ></svg>
    </div>
  );
}

export default ChartBar;
