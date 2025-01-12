import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen">
        <Button>Click me</Button>
      </div>
    </main>
  );
}
