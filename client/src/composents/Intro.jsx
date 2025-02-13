// Style
import "../style/generalCSS.scss";
import "../style/composents/Intro.scss";

function Intro({ info }) {
  return info.id ? (
    <div className="intro_ctn ver">
      <h1>
        Bonjour <span>{info.userInfos.firstName}</span>
      </h1>
      <span className="intro_msg">
        Félicitations ! Vous avez explosé vos objectifs hier 👏
      </span>
    </div>
  ) : (
    <></>
  );
}

export default Intro;
