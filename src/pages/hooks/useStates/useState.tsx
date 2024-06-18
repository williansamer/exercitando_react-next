import DisplayCount from "@/components/DisplayCount";
import Topo from "@/components/Topo";
import { useState } from "react";

export default function FUseState() {
    const [count, setCount] = useState<number>(0);

    return(
        <div>
            <Topo/>
            <div className="text-3xl">UseState</div>
            <div className="flex flex-col justify-center items-center bg-slate-600 rounded w-[250px] text-center m-auto p-5">
                <div className="font-bold text-gray-300 text-xl">Contador</div>
                <DisplayCount valor={count} fValor={setCount}/>
            </div>
        </div>
    )
};
