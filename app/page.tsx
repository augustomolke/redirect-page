import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col justify-center h-screen p-6">
      <Card>
        <CardHeader>
          <CardTitle>Nós mudamos de endereço!</CardTitle>
          <CardDescription>
            Por favor, escolha uma opção abaixo para ser reedirecionado(a):
          </CardDescription>
        </CardHeader>
        <CardContent className=" flex flex-col items-center gap-4">
          <Link href="https://spx-legacy.netlify.app/integracao">
            <Button>Ainda não fiz o treinamento</Button>
          </Link>

          <Link href="https://own-fleet.shps-br-services.com/">
            <Button>Vou realizar minha primeira entrega</Button>
          </Link>

          <Link href="https://spx-legacy.netlify.app/">
            <Button>Já faço entregas</Button>
          </Link>
        </CardContent>
      </Card>
    </section>
  );
}
