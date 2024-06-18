import { useRouter } from "next/router";
import Card from "../../components/Card";
import Topo from "@/components/Topo";

var products = [
    { 
        id: 1,
        product: "Mouse",
        value: 29.90,
        percentageDiscount: 5,
        bestOffer: "Pix",
        available: true
    },
    { 
        id: 2,
        product: "Teclado",
        value: 49.90,
        percentageDiscount: 10,
        bestOffer: "Boleto",
        available: true
    },
    { 
        id: 3,
        product: "Monitor",
        value: 799.90,
        percentageDiscount: 0,
        bestOffer: "",
        available: true
    },
    { 
        id: 4,
        product: "CPU",
        value: 899.90,
        percentageDiscount: 50,
        bestOffer: "Pix",
        available: true
    },
    { 
        id: 5,
        product: "Head Set",
        value: 99.90,
        percentageDiscount: 5,
        bestOffer: "Pix",
        available: true
    }
]

function calcDiscount(value: number, percentage: number) {
    let result = value - (value * (percentage / 100));
    return result.toFixed(2);
}

export default function Products() {
    const route = useRouter();
    const {nome, qualidade} = route.query;

    return(
        <div>
            <Topo/>
            <div className="flex justify-evenly gap-2 m-2">
            {products.map((e: any) => {
                if (e.available) {
                    return(
                        <Card 
                            key={e.id}
                            product={e.product} 
                            value={e.value} 
                            percentageDiscount={e.percentageDiscount} 
                            bestOffer={e.bestOffer} 
                            funcao={calcDiscount}
                        />
                    )
                }
            })}
        </div>
        </div>
    )
};
