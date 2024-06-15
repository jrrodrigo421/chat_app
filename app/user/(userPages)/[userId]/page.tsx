import { Button } from "@/components/ui/button";
import Image from "next/image";

type Props = {
  params: {
    userId: string
  }
}

export default function UserDetails({params: {userId}} : Props) {
  return <h1>
    Detalhes do usuario {userId}
  </h1>
}
