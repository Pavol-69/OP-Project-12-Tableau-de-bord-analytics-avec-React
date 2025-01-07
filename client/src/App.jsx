// Style
import "./style/generalCSS.scss";
import "./style/App.scss";

// Components
import Header from "./composents/header/Header";
import VerticalBar from "./composents/vertical_bar/VerticalBar";

// Database
import database from "./database/database";

function App() {
  console.log(
    database
      .user(12)
      .info()
      .then((toto) => console.log(toto.data.data))
  );
  return (
    <>
      <VerticalBar />
      <Header />
      <div className="main_ctn"></div>
    </>
  );
}

export default App;
