import Topo from "@/components/Topo";
import { useState, useEffect } from "react";

export default function FUseEffect() {
    const [aux, setAux] = useState<number>(0);

    useEffect(()=> {
        console.log("Contagem Liberada")
    }, [aux]);

    function handleAux() {
        let a = aux;
        a++;
        setAux(a);
    }
    return(
        <div>
            <Topo/>
            <div className="text-3xl">UseEffect</div>
            <div className="flex flex-col justify-center items-center bg-slate-600 rounded w-[250px] text-center m-auto p-5">
                <div className="font-bold text-gray-300 text-xl">Contador</div>
                <div>{aux}</div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                    onClick={handleAux}>
                    Adicionar
                </button>
            </div>
        </div>
    )
};
