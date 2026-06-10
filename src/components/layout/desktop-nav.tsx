import Link from "next/link";
import { navItems } from "@/lib/navigation";

export function DesktopNav() {
  return (
    <nav aria-label="Navigation principale" className="hidden items-center gap-7 lg:flex">
      {navItems.map((item) => (
        <Link
          className="text-sm font-medium text-[#d9d0c2] transition-colors hover:text-[#f7d99b]"
          href={item.href}
          key={item.href}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
