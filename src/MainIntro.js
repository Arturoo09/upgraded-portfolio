import "./App.css";
import Top from "./Components/Header/Top";
import Intro from "./Components/Intro/Intro";

function MainIntro() {
  return (
    <div className="MainIntro">
      <Top />
      <Intro />
    </div>
  );
}

export default MainIntro;
