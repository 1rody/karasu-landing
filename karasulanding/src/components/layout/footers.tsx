import Link from "next/link";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
];

const services = [
    "Red Team",
    "Penetration Testing",
    "SOC Operations",
    "Incident Response",
    "Threat Intelligence",
];

const socials = [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/karasu-cybersec/" },
    { label: "Instagram", href: "https://www.instagram.com/karasu.sh/" },
];

export default function Footer() {
    return (
        <footer className="w-full bg-(--foreground) text-(--background) mt-20">
            <div className="mx-auto w-full max-w-[1600px] px-6 md:px-10 py-14 md:py-20">
                <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between border-b border-(--background)/15 pb-12">
                    <div className="flex flex-col gap-4 max-w-xl">
                        <span className="text-xs uppercase tracking-[0.3em] text-(--background)/50">
                            ONE RAVEN, THREE FRONTS
                        </span>
                    <div className="relative justify-center mb-5  h-8">
                            <img src="/assets/icons/LogoDark.svg" alt="karasu" width={120} height={32} className="hidden dark:block" />
                            <img src="/assets/icons/LogoLight.svg" alt="karasu" width={120} height={32} className=" dark:hidden" />
                    </div>
                        <p className="text-(--background)/70 text-base md:text-lg">
                            Offense, defense, and the intelligence that connects them. Security that watches
                            while you sleep.
                        </p>
                    </div>

                    <div className="flex flex-col items-start gap-4 lg:items-end">
                        <p className="text-sm text-(--background)/60 lg:text-right max-w-xs">
                            Ready to see how an adversary sees you?
                        </p>
                        <button className="primary-btn">
                            <Link href="#contact">BOOK A BRIEFING</Link>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-12">
                    <div className="flex flex-col gap-4">
                        <span className="text-xs uppercase tracking-[0.2em] text-(--background)/40">Navigate</span>
                        <ul className="flex flex-col gap-2.5">
                            {navLinks.map((l) => (
                                <li key={l.label}>
                                    <Link
                                        href={l.href}
                                        className="text-sm uppercase tracking-wider transition-opacity hover:opacity-60"
                                    >
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                        <span className="text-xs uppercase tracking-[0.2em] text-(--background)/40">Services</span>
                        <ul className="flex flex-col gap-2.5">
                            {services.map((s) => (
                                <li key={s} className="text-sm text-(--background)/70">{s}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                        <span className="text-xs uppercase tracking-[0.2em] text-(--background)/40">Social</span>
                        <ul className="flex flex-col gap-2.5">
                            {socials.map((s) => (
                                <li key={s.label}>
                                    <Link
                                        href={s.href}
                                        className="text-sm uppercase tracking-wider transition-opacity hover:opacity-60"
                                    >
                                        {s.label} ↗
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                        <span className="text-xs uppercase tracking-[0.2em] text-(--background)/40">Get in touch</span>
                        <a href="mailto:contact@karasu.sh" className="text-sm transition-opacity hover:opacity-60 break-all">
                            contact@karasu.sh
                        </a>
                    </div>
                </div>
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-t border-(--background)/15 pt-8 text-xs text-(--background)/50">
                    <span className="font-(family-name:--font-Handjet)">
                        © {new Date().getFullYear()} KARASU — All rights reserved.
                    </span>
                    <div className="flex items-center gap-6">
                        <Link href="#" className="uppercase tracking-wider transition-opacity hover:opacity-100">Privacy</Link>
                        <Link href="#" className="uppercase tracking-wider transition-opacity hover:opacity-100">Terms</Link>
                        <span className="select-none">—</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
