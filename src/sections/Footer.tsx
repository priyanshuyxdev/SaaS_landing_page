import logoImage from '@assets/images/logo.svg'
import Image from 'next/image';

const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
    return (
        <section className="py-16">
            <div className="container">
                <div className="flex flex-col md:flex-row md:justify-between items-center gap-6">
                    <div>
                        <Image src={logoImage} alt="logo" />
                    </div>
                    <nav className="flex gap-6">
                        {footerLinks.map((links) => (
                            <a
                                key={links.href}
                                href={links.href}
                                className="text-white/50 text-sm"
                            >
                                {links.label}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </section>
    );
}
