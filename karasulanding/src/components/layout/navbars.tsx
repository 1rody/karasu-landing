import Link from "next/link";


export default function NavLanding() {
    return (
        <header className="w-full h-20 flex items-center justify-between px-8">
            <nav className="w-full flex items-center justify-between">
                <span className="select-none">—</span>

                <Link href="/">
                    <img src="/assets/icons/LogoDark.svg" alt="karasu" width={120} height={32} className="dark:hidden" />
                    <img src="/assets/icons/LogoLight.svg" alt="karasu" width={120} height={32} className="hidden dark:block" />
                </Link>
                <div className="flex items-center gap-6 px-10 py-3 [clip-path:polygon(6%_0,94%_0,100%_100%,0_100%)]">
                    <span className="select-none">—</span>
                    <Link href="#about" className="text-xs uppercase tracking-wider">About</Link>
                    <Link href="#services" className="text-xs uppercase tracking-wider">Services</Link>
                    <Link href="#blog" className="text-xs uppercase tracking-wider">Blog</Link>
                    <span className="select-none">—</span>
                </div>
                <span className="text-xs font-geist-mono italic">//dd/mm/xxxxGMT</span>
                <span className="select-none">—</span>
            </nav>
        </header>
    )
}