"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { useLenis } from "lenis/react";

export default function NavLanding() {
    const [time, setTime] = useState(new Date());
    const [scrolled, setScrolled] = useState(false);
    const lenis = useLenis();

    const scrollTo = (e: React.MouseEvent, target: string) => {
        e.preventDefault();
        lenis?.scrollTo(target, { offset: -80 });
    };

    useEffect(() => {
        setTime(new Date());
        const interval = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    const { scrollY } = useScroll();
    useMotionValueEvent(scrollY, "change", (y) => {
            const threshold = 10;
            setScrolled(y > threshold);
    });

    return (
        <motion.header
            animate={{ height: scrolled ? 56 : 80 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="w-full z-50 fixed flex items-center justify-between p-5 px-8"
        >
            <motion.div
                aria-hidden
                initial={false}
                animate={{ opacity: scrolled ? 1 : 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[180%] backdrop-blur-md"
                style={{
                    background:
                        "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.14) 45%, rgba(0,0,0,0) 100%)",
                    maskImage:
                        "linear-gradient(to bottom, black 0%, black 50%, transparent 100%)",
                    WebkitMaskImage:
                        "linear-gradient(to bottom, black 0%, black 50%, transparent 100%)",
                }}
            />

            <nav className="w-full flex items-center justify-between font-(family-name:--font-Handjet)">
                <span className="select-none text-lg hidden md:flex lg:flex sm:flex">—</span>

                <div className="relative items-center justify-center min-w-[120px] hidden md:flex lg:flex sm:flex h-8">
                    <AnimatePresence mode="wait" initial={false}>
                        {!scrolled ? (
                            <motion.div
                                key="logo-full"
                                initial={{ opacity: 0, y: -8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 8 }}
                                transition={{ duration: 0.25 }}
                            >
                                <Link href="/">
                                    <img src="/assets/icons/LogoDark.svg" alt="karasu" width={120} height={32} className="dark:hidden" />
                                    <img src="/assets/icons/LogoLight.svg" alt="karasu" width={120} height={32} className="hidden dark:block" />
                                </Link>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="logo-crow"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.25 }}
                            >
                                <Link href="/">
                                    <img src="/assets/icons/karasuDarkSolid.png" alt="karasu" width={32} height={32} className="dark:hidden" />
                                    <img src="/assets/icons/karasuLightSolid.png" alt="karasu" width={32} height={32} className="hidden dark:block" />
                                </Link>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                <div className="flex items-center gap-6  [clip-path:polygon(6%_0,94%_0,100%_100%,0_100%)]">
                    <span className="select-none text-lg">—</span>
                    <Link href="#about" onClick={(e) => scrollTo(e, "#about")} className="text-lg uppercase tracking-wider">About</Link>
                    <Link href="#services" onClick={(e) => scrollTo(e, "#services")} className="text-lg uppercase tracking-wider">Services</Link>
                    <Link href="#contact" onClick={(e) => scrollTo(e, "#contact")} className="text-lg uppercase tracking-wider">Contact</Link>
                    <Link href="/blog" className="text-lg uppercase tracking-wider">Blog</Link>
                    <span className="select-none text-lg">—</span>
                </div>

                <span className="text-lg font-geist-mono italic hidden md:flex lg:flex sm:flex">{time ? time.toLocaleTimeString() : "--:--:--"}</span>
                <span className="select-none text-lg hidden md:flex lg:flex sm:flex">—</span>
            </nav>
        </motion.header>
    );
}