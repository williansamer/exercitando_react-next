import Menu from "./Menu";

export default function Topo() {
    return(
      <div>
        <div className="flex justify-between items-center h-32 bg-gray-700 text-cyan-50 font-semibold p-[25px]">
            <div className="title-topo">Família Oliveira</div>
            <div className="title-topo">
            <div>Rua dos Animais, nº 1234</div>
            <div>Telefone: 17 12349876</div>
            <div>Votuporanga-SP</div>
            </div>
            <div className="title-topo">Bom dia Cinelera!!!</div>
        </div>
      <Menu/>
      </div>
    )
  }