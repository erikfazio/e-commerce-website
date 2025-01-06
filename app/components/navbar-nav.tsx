import Link from "next/link";

const links = [
  { href: "/", label: "Shop all" },
  { href: "/products", label: "Latest arrivals" },
];

export default function NavbarNav() {
  return (
    <nav className="hidden desktop:flex items-center gap-8 grow">
      <ul className="flex items-center gap-8">
        {links.map(({ href, label }) => (
          <li key={`${href}${label}`}>
            <Link
              className="font-medium text-base text-neutral-600 hover:text-neutral-900"
              href={href}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
