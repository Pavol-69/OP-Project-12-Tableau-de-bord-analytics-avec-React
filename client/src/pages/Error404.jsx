// Style
import "../style/generalCSS.scss";
import "../style/pages/Error404.scss";

// Components
import Header from "../composents/header/Header";
import VerticalBar from "../composents/vertical_bar/VerticalBar";

function Error404() {
  return (
    <>
      <VerticalBar />
      <Header />
      <div className="main_ctn ver">
        <div className="err_msg_ctn">
          <span className="error404">Erreur 404.</span>
          <span>{"Avez-vous bien défini un userId dans l'url ?"}</span>
          <span>
            {
              "Par exemple : http://localhost:5173/user_page/12 => Ici 12 est l'userId."
            }
          </span>
        </div>
      </div>
    </>
  );
}

export default Error404;
