import "../../style/generalCSS.scss";
import "../../style/composents/vertical_bar/VerticalBar.scss";
import meditation from "../../assets/icon-meditation.svg";
import swim from "../../assets/icon-swim.svg";
import bike from "../../assets/icon-bike.svg";
import haltero from "../../assets/icon-haltero.svg";
import VerticalBarButton from "./VerticalBarButton";

function VerticalBar() {
  return (
    <div className="ver_bar elm_ct">
      <span className="copyright elm_ct">Copyright SportSee 2020</span>
      <div className="ver_btn_ctn ver">
        <VerticalBarButton icon={meditation} />
        <VerticalBarButton icon={swim} />
        <VerticalBarButton icon={bike} />
        <VerticalBarButton icon={haltero} />
      </div>
    </div>
  );
}

export default VerticalBar;
