// Style
import "../../style/generalCSS.scss";
import "../../style/composents/vertical_bar/VerticalBar.scss";

// Data
import meditation from "../../assets/icon-meditation.svg";
import swim from "../../assets/icon-swim.svg";
import bike from "../../assets/icon-bike.svg";
import haltero from "../../assets/icon-haltero.svg";

// Components
import VerticalBarButton from "./VerticalBarButton";

function VerticalBar() {
  return (
    <div className="ver_bar elm_ct ver">
      <span className="copyright elm_ct">Copyright SportSee 2020</span>
      <VerticalBarButton icon={meditation} />
      <VerticalBarButton icon={swim} />
      <VerticalBarButton icon={bike} />
      <VerticalBarButton icon={haltero} />
    </div>
  );
}

export default VerticalBar;
