// Style
import "../../style/generalCSS.scss";
import "../../style/composents/activity/ChartBarLegend.scss";

function ChartBarLegend({ color, legend }) {
  return (
    <div className="elm_ct legend_ctn">
      <div className="pastille_lgd" style={{ backgroundColor: color }}></div>
      <span>{legend}</span>
    </div>
  );
}

export default ChartBarLegend;
