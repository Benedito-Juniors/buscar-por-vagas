import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
    return (
        <main className="text-center py-10 max-w-5xl mx-auto">
            <h1 className="text-4xl bold font-display text-gray-700">
                Ops,nada encontrado aqui...
            </h1>
            <img src="/404.png" alt="barco afundando" className="mx-auto w-xs mt-10" />
            <p className="text-3xl text-gray-400 font-light">
                Não foi possivel encontrar a pagina encontrada...
            </p>
            <Button className="mt-6 text-lg">
                <Link href='/'>
                    Voltar a  Home
                </Link>
            </Button>
        </main>
    )
}