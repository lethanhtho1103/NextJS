import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ModeToggle } from "../components/mode-toggle";
import Header from "@/components/header";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="font-normal text-center">Hello world</div>
    </main>
  );
}
