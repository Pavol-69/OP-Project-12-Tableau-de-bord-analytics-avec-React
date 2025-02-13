import "../../style/generalCSS.scss";
import "../../style/composents/alimentation/AlimentationCard.scss";

function AlimentationCard({ icon, color, qty, unit, type, opacity }) {
  return (
    <div className="alim_card">
      <div className="img_alim_card_ctn elm_ct">
        <div
          className="img_alim_card_bg"
          style={{ backgroundColor: color, opacity: opacity }}
        ></div>
        <img src={icon} />
      </div>
      <div className="alim_card_txt_ctn ver">
        <span>{qty + unit}</span>
        <p>{type}</p>
      </div>
    </div>
  );
}

export default AlimentationCard;
