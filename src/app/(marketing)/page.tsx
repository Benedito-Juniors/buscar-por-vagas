import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <section className="text-center pb-10">
      <h1 className="text-5xl font-display font-black w-xl mx-auto">
        Diga adeus ás longas buscas por vagas.
      </h1>
      <Button className="cursor-pointer mt-12" variant={'outline'}>
         <Link href='/vagas'>Buscar Vagas</Link>
      </Button>
      <img src='./grupo.png' alt='grupo' className="mx-auto mt-12"/>
    </section>
  )
}