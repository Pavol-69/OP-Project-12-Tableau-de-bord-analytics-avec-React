import "../../style/generalCSS.scss";
import "../../style/composents/header/Header.scss";
import bigLogo from "../../assets/big-logo-sportsee.svg";
import HeaderButton from "./HeaderButton";

function Header() {
  return (
    <header>
      <div className="logo_hd_ctn elm_ct">
        <img className="logo_hd" alt="Logo site" src={bigLogo} />
      </div>

      <div className="hd_btn_ctn">
        <HeaderButton name={"Accueil"} />
        <HeaderButton name={"Profil"} />
        <HeaderButton name={"Réglage"} />
        <HeaderButton name={"Communauté"} />
      </div>
    </header>
  );
}

export default Header;
