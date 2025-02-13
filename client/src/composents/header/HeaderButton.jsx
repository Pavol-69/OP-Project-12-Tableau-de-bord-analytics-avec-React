import "../../style/generalCSS.scss";
import "../../style/composents/header/HeaderButton.scss";

function HeaderButton({ name }) {
  return <button className="hd_btn">{name}</button>;
}

export default HeaderButton;
