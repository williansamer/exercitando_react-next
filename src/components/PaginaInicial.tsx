const patriarca = "Willian";
const matriarca = "Joyce";
const filhos = ["Théo", "Martina"];
import Globais from "./Globais";

function GetPatriarca() {
    return (
      <div>Patriarca = {patriarca}</div>
    )
  }
  
  function GetMatriarca() {
    return (
      <div>Matriarca = {matriarca}</div>
    )
  }
  
  function GetFilhos() {
    return(
      <div>
        {filhos.map((filho, index) => {
          return <div key={index + 1}>Filho {index + 1} = {filho}</div>
        })}
      </div>
    )
  }

export default function PaginaInicial() {
    return(
        <div>
          <div className="font-semibold text-xl pl-4" style={cssTeste}> {/*style tem que ser 2 colchetes*/}
              <GetPatriarca/>
              <GetMatriarca/>
              <GetFilhos/>
          </div>
          <div className="text-3xl">
            <div><strong>Exemplos de variáveis Globais</strong></div>
            <div>Hobby: {Globais.hobby}</div>
            <div>Bebe: {Globais.bebe}</div>
            <div>Fuma: {Globais.fuma}</div>
          </div>
        </div>
    )
};

//____________________________________css inline____________________________________

const cssTeste = {
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  backgroundColor: "#ddd",
  textShadow: "white 1px 1px 0.3rem"
}