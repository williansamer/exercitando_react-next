import Topo from "@/components/Topo";
import { useState, useEffect } from "react";

let carros: any = "";
let loading = true;

export default function Filtragem() {
    const [categ, setCateg] = useState<string>("");
    const [line, setLine] = useState<any[]>([]);

    useEffect(()=>{
        fetch("http://127.0.0.1:1880/carros")
        .then(res=>res.json())
        .then(res=>{
            carros = res;
            loading = false
        })
    }, [])

    function handleFilter(e: any) {

        if (!loading) {
            setCateg(e);

            let l:any[] = [];
            carros.forEach((carro: any)=> {
                if (carro.categ === e || e === "Todos") {
                    l.push(<div className="flex flex-row mt-5" key={carro.id}>
                        <div className="w-full">{carro.categ}</div>
                        <div className="w-full">{carro.valor}</div>
                        <div className="w-full">{carro.modelo}</div>
                    </div>)
                }
            })
    
            setLine(l);
        } else {
            alert("Dados ainda estão sendo carregados")
        }
    }

    return(
        <div>
            <Topo/>
            <select value={categ} onChange={(e)=>handleFilter(e.target.value)}>
                <option value="">Selecione</option>
                <option value="Esporte">Esporte</option>
                <option value="SUV">SUV</option>
                <option value="Utilitário">Utilitário</option>
                <option value="Todos">Todos</option>
            </select>
            <div className="flex flex-col">
                <div className="flex flex-row mt-5 font-bold">
                    <div className="w-full">Categoria</div>
                    <div className="w-full">Valor</div>
                    <div className="w-full">Modelo</div>
                </div>
                {line}
            </div>
        </div>
    )
};


// _______________________Outro modo de fazer funcionar. Usando o "UseEffect"______________________________

// export default function filtragem() {
//     const [categ, setCateg] = useState<string>("");
//     const [line, setLine] = useState<any[]>([]);

//     function handleFilter(e: any) {
//         const selectedCategory = e; // Access "e" directly

//         setCateg(selectedCategory);
//     }

//     // Use useEffect hook to perform actions after state update
//     useEffect(() => {
//         let l: any[] = [];
//         carros.forEach((carro: any) => {
//             if (carro.categ === categ || categ === "Todos") {
//                 l.push(
//                     <div className="flex flex-row mt-5" key={carro.id}>
//                         <div className="w-full">{carro.categ}</div>
//                         <div className="w-full">{carro.valor}</div>
//                         <div className="w-full">{carro.modelo}</div>
//                     </div>
//                 );
//             }
//         });

//         setLine(l);
//     }, [categ]); // useEffect will trigger whenever categ changes

//     return (
//         <div>
//             <Topo/>
//             <select value={categ} onChange={(e)=>handleFilter(e.target.value)}>
//                 <option value="">Selecione</option>
//                 <option value="Esporte">Esporte</option>
//                 <option value="SUV">SUV</option>
//                 <option value="Utilitário">Utilitário</option>
//                 <option value="Todos">Todos</option>
//             </select>
//             <div className="flex flex-col">
//                 <div className="flex flex-row mt-5 font-bold">
//                     <div className="w-full">Categoria</div>
//                     <div className="w-full">Valor</div>
//                     <div className="w-full">Modelo</div>
//                 </div>
//                 {line}
//             </div>
//         </div>
//     );
// }
