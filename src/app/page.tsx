import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ModeToggle } from "./components/ModeToggle/mode-toggle";

export default function Home() {
  return (
    <main>
      <ModeToggle />
      <div className="font-normal text-center">Hello world</div>
    </main>
  );
}
