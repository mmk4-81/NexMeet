import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="w-full border-b">
      <div className="flex items-center justify-between h-16 px-4 max-w-7xl mx-auto">
        <Link href="/" className="font-bold text-xl">
          Logo
        </Link>

        <div className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <Button>Sign In</Button>
      </div>
    </nav>
  );
}
