import Link from "next/link"
import { useState } from "react"

export default function Menu() {

    return(
        <nav className="flex justify-center p-2 gap-10 text-2xl text-yellow-400 bg-gray-700 mb-2">
            <Link href={"/"}>Home</Link>
            <Link href={{
                pathname: "/products/products",
                query: {
                    nome: "Willian",
                    qualidade: "Honesto"
                }
            }}>Products</Link>
            <Link href={"/hooks/useStates/useState"}>UseState</Link>
            <Link href={"/hooks/useEffects/useEffect"}>UseEffect</Link>
            <Link href={"/forms/inputs"}>Inputs</Link>
            <Link href={"/filtragem/filtragem"}>Filtragem</Link>
        </nav>
    )
};
