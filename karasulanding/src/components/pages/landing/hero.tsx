import Link from "next/dist/client/link";

export default function HeroSection() {
    return (
        <>
            <section className="h-screen w-full items-center overflow-hidden relative justify-around items-center flex">
                <div className="flex flex-col p-10 text-left">
                    <div className="flex flex-col  text-left">
                        <p className="text-right text-2xl"><span className="font-bold bg-(--color-hilight-purple)">Security</span> that watches while you sleep</p>
                        <h1 className="leading-none text-(length:--super-large-text) font-bold font-(family-name:--font-Handjet)">
                        KARASU
                        </h1>                        
                        <h2 className="text-md text-(--neutral) font-bold">
                            Offense, defense, and the intelligence that connects them. br One crow, three fronts. <br /> The same minds that find your gaps are the ones who close them.
                        </h2>
                    </div>
                    <div className="flex items-center gap-5 mt-10">
                        <button className="primary-btn"><Link href="/get-started">BOOK A BRIEFING </Link></button>
                        <Link className="secondary-btn font-bold" href="/get-started">SEE MORE →</Link>
                    </div>
                </div>
                <div>
                    <img className="absolute top-0 -right-110 dark:hidden" src="/assets/backgrounds/Crow_light.png" alt="Hero Crow" />
                    <img className="absolute top-0 -right-110 hidden dark:block" src="/assets/backgrounds/Crow_dark.png" alt="Hero Crow" />
                </div>
            </section>  
        </>
    )
}