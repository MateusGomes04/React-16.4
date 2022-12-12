import "./App.css";
import Primeiro from "./components/primeiro";
import Morning from "./components/bomdia";
import { BoaNoite, BoaTarde } from "./components/multi";

function App() {
  return (
    <div className="App">
      <Primeiro></Primeiro>
      <Morning name="mateus"></Morning>
      <BoaTarde name="Bia"></BoaTarde>
      <BoaNoite name="Lucas"></BoaNoite>
    </div>
  );
}

export default App;
