import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-Toggle";

export function Page() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button className="btn-primary">Get Started</Button>
      <ModeToggle />
    </main>
  );
}
