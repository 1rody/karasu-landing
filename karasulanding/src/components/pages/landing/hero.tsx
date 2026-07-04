import Link from "next/dist/client/link";

export default function HeroSection() {
    return (
        <>
            <section className="h-screen w-full items-center justify-center items-center flex">
                <div className="flex flex-col p-10 text-left">
                    <div className="flex flex-col  text-left">
                        <p><span>Security</span> that watches while you sleep</p>
                        <h1 className="text-9xl font-bold">KARASU</h1>
                        <h2>Offense, defense, and the intelligence that connects them. One crow, three fronts. The same minds that find your gaps are the ones who close them.</h2>
                    </div>
                    <div className="flex gap-5 mt-10">
                        <button><Link href="/get-started">BOOK A BRIEFING </Link></button>
                        <Link href="/get-started">SEE MORE →</Link>
                    </div>
                </div>
                <div>
                    
                </div>
            </section>  
        </>
    )
}