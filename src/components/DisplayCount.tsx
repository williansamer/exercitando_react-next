interface DisplayCountProps{
    valor: number,
    fValor: any
}

export default function DisplayCount(props: DisplayCountProps) {

    function handleCount(op: number) {
        let c = props.valor;
        c+=op;
        props.fValor(c);
    }

    return(
        <div>
            <div className="text-2xl p-1 m-2 bg-black text-green-400">{props.valor}</div>
            <div className="flex gap-5">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                    onClick={()=>handleCount(1)}>
                    Adicionar
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                    onClick={()=>handleCount(-1)}>
                    Subtrair
                </button>
            </div>
        </div>
    )
};
