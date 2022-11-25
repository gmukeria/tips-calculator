import "./App.css";
import TipCalculator from "./components/TipCalculator";
import logoImg from "../src/assets/logo.svg";

function App() {
  return (
    <>
      <div className="logo">
        <img src={logoImg} alt="" />
      </div>
      <TipCalculator />
    </>
  );
}

export default App;
