"use client";
import Link from "next/link";
import { useEffect, useState } from 'react';


export default function NavLanding() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        setTime(new Date()); 
        const interval = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);


    return (
        <header className="w-full z-50 fixed h-20 flex items-center justify-between px-8">
            <nav className="w-full flex items-center justify-between font-(family-name:--font-Handjet)">
                <span className="select-none text-lg">—</span>

                <Link href="/">
                    <img src="/assets/icons/LogoDark.svg" alt="karasu" width={120} height={32} className="dark:hidden" />
                    <img src="/assets/icons/LogoLight.svg" alt="karasu" width={120} height={32} className="hidden dark:block" />
                </Link>
                <div className="flex items-center gap-6 px-10 py-3 [clip-path:polygon(6%_0,94%_0,100%_100%,0_100%)]">
                    <span className="select-none">—</span>
                    <Link href="#about" className="text-lg uppercase tracking-wider">About</Link>
                    <Link href="#services" className="text-lg uppercase tracking-wider">Services</Link>
                    <Link href="#blog" className="text-lg uppercase tracking-wider">Blog</Link>
                    <span className="select-none text-lg">—</span>
                </div>
                <span className="text-lg font-geist-mono italic">{time ? time.toLocaleTimeString() : "--:--:--"}</span>
                <span className="select-none text-lg">—</span>
            </nav>
        </header>
    )
}