import "../../style/generalCSS.scss";
import "../../style/composents/vertical_bar/VerticalBarButton.scss";

function VerticalBarButton({ icon }) {
  return (
    <div className="ver_bar_btn elm_ct">
      <img alt={icon.name} src={icon} />
    </div>
  );
}

export default VerticalBarButton;
