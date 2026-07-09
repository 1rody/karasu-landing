export default function AboutSection() {
    return (
        <>
            <section className="mt-20 w-full  relative justify-center flex-col gap-10 items-center flex">
                <div className="flex mb-30 gap-30 flex-col p-6 md:p-10 lg:w-8/12 md:w-10/12 w-11/12 m-5 bg-(--foreground) rounded-2xl text-left text-(--background)">
                    <div className="flex justify-between gap-5 items-center">
                        <img src="/assets/misc/assets-2.png" alt="karasu" width={120} height={32} className="dark:invert-100" />
                        <img src="/assets/misc/assets-2.png" alt="karasu" width={120} height={32} className="dark:invert-100" />
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 md:gap-10 justify-between items-center">
                        <div className="w-full">
                            <h2 className="text-3xl font-bold">ABOUT US</h2>
                            <article className="flex flex-col gap-5 mt-4 lg:max-w-3xl">
                                <p>
                                    Karasu is an offensive and defensive security firm built by operators, not
                                    box-tickers. We think like the people trying to break in — because the same
                                    minds that find your gaps are the ones who close them. From red team engagements
                                    to 24/7 monitoring, we cover the full picture: attack, defense, and the
                                    intelligence that ties them together.
                                </p>
                                <p>
                                    Every engagement starts with reconnaissance and ends with hardening you can
                                    measure. No generic reports, no fear-selling — just clear findings, real
                                    exploitation proof, and a defense that holds up when it matters. One crow,
                                    three fronts, watching while you sleep.
                                </p>
                            </article>
                        </div>

                        <img
                            className="hidden md:block shrink-0 dark:invert-100"
                            height={10}
                            width={300}
                            src="/assets/misc/KarasuStrokes.svg"
                            alt="Karasu strokes"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-5 text-center rounded-2xl text-(--foreground) w-11/12 max-w-5xl">
                    <h2 className="text-4xl font-bold">Certifications</h2>
                    <div className="flex justify-center items-center gap-5">
                        <img
                            className="dark:invert-100 w-full h-auto max-w-3xl"
                            height={100}
                            width={800}
                            src="/assets/misc/Certifications.png"
                            alt="Certifications"
                        />
                    </div>
                </div>

                <div className="flex flex-col mt-50 gap-5 rounded-2xl text-center text-(--foreground) w-11/12 max-w-5xl">
                    <h2 className="text-4xl font-bold">Partners</h2>
                    <div className="flex justify-center items-center gap-5">
                        <img
                            className="dark:invert-100 w-full h-auto max-w-2xl"
                            height={100}
                            width={600}
                            src="/assets/misc/Partners.svg"
                            alt="Partners"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}