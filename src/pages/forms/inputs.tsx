import Topo from "@/components/Topo"
import { useState, useEffect } from "react"
import Globais from "@/components/Globais";

const linguagens = ["Selecione", "JavaScript", "Python", "Java", "C#", "PHP", "TypeScript", "C++", "C", "Ruby", "Swift"]

export default function Teste() {

    const [name, setName] = useState<string>("");
    const [age, setAge] = useState<string>("");
    const [language, setLanguage] = useState<string>("");

    useEffect(()=>{
        Globais.fuma = "Sim"
    }, []);

    return(
        <div>
            <Topo/>
            <div>
                <div className=" flex flex-col w-[300px] text-blue-500 font-bold mb-2">
                    <label htmlFor="">Digite o nome</label>
                    <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Digite o Nome" className="border-2 border-blue-500 text-black rounded py-1 px-2 mb-2"/>
                    <label htmlFor="">Digite a idade</label>
                    <input type="number" name="age" value={age} onChange={(e)=>setAge(e.target.value)} placeholder="Digite a Idade" className="border-2 border-blue-500 text-black rounded py-1 px-2 mb-2"/>
                    <label htmlFor="">Qual linguagem você mais domina?</label>
                    <select name="language" value={language} onChange={(e)=>setLanguage(e.target.value)} className="border-2 border-blue-500 text-black rounded py-1 px-2 mb-2">
                        {linguagens.map((item)=> {
                            return <option key={Math.random()*99999999999999} value={item}>{item}</option>
                        })}
                    </select>
                </div>
                <div className="text-blue-500 font-bold">Digitando nome: <span className="text-black">{name}</span></div>
                <div className="text-blue-500 font-bold">Digitando idade: <span className="text-black">{age}</span></div>
                <div className="text-blue-500 font-bold">Tecnologia: <span className="text-black">{language}</span></div>
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
