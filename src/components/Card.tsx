interface CardProps{
    product: string,
    value: number,
    percentageDiscount: number,
    bestOffer: string,
    funcao: any
}

export default function Card(props: CardProps) {

    return(
        <div className={`flex flex-col justify-start ${props.percentageDiscount ? "border-red-500 border-[2px]" : "border-emerald-700 border-[1px]"} rounded-lg text-xl p-2`}>
            {props.percentageDiscount > 0 
            ? 
                (<div>
                    <div className="h-10 text-center">
                        <span className="font-medium underline">{props.product}</span>
                        <span className="tag-discount">-{props.percentageDiscount}% no {props.bestOffer}</span>
                    </div>
                    <div>
                        De: <span className="line-through">{props.value.toFixed(2)}</span>
                    </div>
                    <div>
                        Por: <strong>{props.funcao(props.value, props.percentageDiscount)}</strong>
                    </div>
                </div>)
            :
                (<div>
                    <div className="h-10 text-center">
                        <span className="font-medium underline">{props.product}</span>
                    </div>
                    <div>
                        Valor: <strong>{props.funcao(props.value, props.percentageDiscount)}</strong>
                    </div>
                </div>)
            }
        </div>
    )
};
