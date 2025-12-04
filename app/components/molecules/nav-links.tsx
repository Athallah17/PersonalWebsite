import Link from "next/link";

export function NavLinks() {
    const links = [
        { href: "#about", label: "About" },
        { href: "#projects", label: "Projects" },
        { href: "#experience", label: "Experience" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <div className="flex gap-6">
        {links.map((link) => (
            <Link
            key={link.href}
            href={link.href}
            className="text-sm hover:text-primary transition-colors"
            >
            {link.label}
            </Link>
        ))}
        </div>
    );
}
