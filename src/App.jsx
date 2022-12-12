import "./App.css";
import Primeiro from "./components/primeiro";
import Morning from "./components/bomdia";
import { BoaNoite, BoaTarde } from "./components/multi";
import Saudacao from "./components/saudacao";
import Filho from "./components/filho";
import Parente from "./components/parente";

function App() {
  return (
    <div className="App">
      <Primeiro></Primeiro>
      <Morning name="mateus"></Morning>
      <BoaTarde name="Bia"></BoaTarde>
      <BoaNoite name="Lucas"></BoaNoite>
      <Saudacao></Saudacao>
      <Parente name="joao" sobrenome="Fernandes">
        <Filho name="Paulo" />
        <Filho name="Maria" />
        <Filho name="Carlos" />
      </Parente>
    </div>
  );
}

export default App;
