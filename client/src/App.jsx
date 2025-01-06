// Style
import "./style/generalCSS.scss";
import "./style/App.scss";

// Components
import Header from "./composents/header/Header";
import VerticalBar from "./composents/vertical_bar/VerticalBar";

function App() {
  return (
    <>
      <VerticalBar />
      <Header />
      <div className="main_ctn"></div>
    </>
  );
}

export default App;
