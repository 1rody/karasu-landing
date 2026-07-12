import Link from "next/dist/client/link";

export default function HeroSection() {
    return (
        <>
            <section className="h-screen w-full overflow-hidden relative justify-around items-center flex">
                <div className="flex flex-col p-6 sm:p-8 md:p-10 text-left max-w-2xl z-10">
                    <div className="flex flex-col text-left">
                        <p className="text-right text-lg sm:text-xl md:text-2xl"><span className="font-bold anim-bg-selection" data-text="Security">Security</span> that watches while you sleep</p>
                        <h1 className="leading-none text-(length:--super-large-text) font-bold font-(family-name:--font-Handjet)">
                        KARASU
                        </h1>
                        <h2 className="text-sm sm:text-base text-(--neutral) font-bold">
                            Offense, defense, and the intelligence that connects them. One crow, three fronts. <br /> The same minds that find your gaps are the ones who close them.
                        </h2>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 sm:gap-5 mt-8 md:mt-10">
                        <button className="primary-btn"><Link href="#contact">BOOK A BRIEFING </Link></button>
                        <Link className="secondary-btn font-bold" href="#about">SEE MORE →</Link>
                    </div>
                </div>
                <div aria-hidden className="pointer-events-none">
                    <img className="absolute top-[25%] sm:top-1/2 sm:-translate-y-1/2 -right-40 sm:-right-44 lg:-right-56 w-[115vw] max-w-none sm:w-auto sm:max-h-[85vh] lg:max-h-[90vh] object-contain dark:hidden" src="/assets/backgrounds/Crow_light.png" alt="Hero Crow" />
                    <img className="absolute top-[25%] sm:top-1/2 sm:-translate-y-1/2 -right-40 sm:-right-44 lg:-right-56 w-[115vw] max-w-none sm:w-auto sm:max-h-[85vh] lg:max-h-[90vh] object-contain hidden dark:block" src="/assets/backgrounds/Crow_dark.png" alt="Hero Crow" />
                </div>
            </section>
        </>
    )
}