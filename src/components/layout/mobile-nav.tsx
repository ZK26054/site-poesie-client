"use client";

import Link from "next/link";
import { useState } from "react";
import { navItems } from "@/lib/navigation";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        aria-expanded={isOpen}
        aria-label="Ouvrir la navigation"
        className="inline-flex h-11 w-11 items-center justify-center border border-[#40362d] bg-[#171310] text-[#f6ead6]"
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        <span className="sr-only">Menu</span>
        <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
          <span className="h-px w-full bg-current" />
          <span className="h-px w-full bg-current" />
          <span className="h-px w-full bg-current" />
        </span>
      </button>

      {isOpen ? (
        <div className="absolute left-5 right-5 top-20 border border-[#3d332b] bg-[#120f0d]/95 p-5 shadow-2xl shadow-black/40 backdrop-blur">
          <nav aria-label="Navigation mobile" className="grid gap-1">
            {navItems.map((item) => (
              <Link
                className="border-b border-[#2a241f] py-3 text-base text-[#f3eee6]"
                href={item.href}
                key={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
