import Link from "next/link";
import { Container } from "@/components/ui/container";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#2b241f] bg-[#0d0b0a]/90 backdrop-blur">
      <Container className="relative flex h-20 items-center justify-between">
        <Link href="/" className="group">
          <span className="block text-xs font-semibold uppercase tracking-[0.34em] text-[#c7a46c]">
            Maison
          </span>
          <span className="block text-lg font-semibold text-[#fff8ea]">
            d&apos;autrice
          </span>
        </Link>
        <DesktopNav />
        <MobileNav />
      </Container>
    </header>
  );
}
