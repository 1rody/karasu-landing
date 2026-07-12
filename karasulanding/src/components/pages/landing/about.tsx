export default function AboutSection() {
    return (
        <>
            <section id="about" className="mt-20 w-full max-w-[2000px] mx-auto relative justify-center flex-col gap-10 items-center flex">
                <div className="flex mb-30 gap-10 flex-col justify-between p-6 md:p-10 w-[90%] min-h-[85vh] m-5 bg-(--foreground) rounded-2xl text-left text-(--background)">
                    <div className="flex justify-between gap-5 items-center">
                        <img src="/assets/misc/assets-2.svg" alt="karasu" width={120} height={32} className="dark:invert-100 select-none" />
                    </div>
                    <div className="flex flex-col md:flex-row gap-8 md:gap-10 justify-between items-start">
                        <div className="w-full md:w-1/2">
                            <span className="text-xs uppercase tracking-[0.3em] text-(--background)/50">Who we are</span>
                            <h2 className="text-3xl font-bold mt-2">ABOUT US</h2>
                            <article className="flex flex-col gap-5 mt-4 lg:max-w-3xl leading-relaxed">
                                <p>
                                    Karasu is an offensive and defensive cybersecurity firm led by hands-on
                                    practitioners. We approach every engagement from the perspective of a real
                                    adversary, combining red and blue team operations, continuous monitoring and threat
                                    intelligence into a single, coordinated security posture.
                                </p>
                                <p>
                                    Each engagement begins with structured reconnaissance, thoroughly exploration, and concludes with measurable hardening. We deliver clear, evidence-based findings and validated proof of exploitation, so that defensive investments are grounded in demonstrated risk rather than assumption.
                                </p>
                                <p>
                                   Our team holds industry-recognized certifications and operates under strict rules of engagement, aligning every assessment with frameworks such as MITRE ATT&CK, OWASP, NIST, and LGPD/GDPR. The result is security work that is repeatable, auditable and defensible to both technical teams and leadership.
                                </p>
                            </article>
                        </div>
                        <div className="flex flex-col gap-2 w-full md:w-1/2">
                            <h3 className="text-xl font-bold mb-2">How we work</h3>

                            <details className="group border-t border-(--background)/20 py-4">
                                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                                    What does a typical engagement look like?
                                    <span className="ml-4 transition-transform duration-300 group-open:rotate-45">+</span>
                                </summary>
                                <p className="mt-3 text-(--background)/70 leading-relaxed">
                                    Every engagement starts with scoping and reconnaissance, moves through controlled
                                    exploitation and continuous reporting, and ends with a debrief plus prioritized,
                                    measurable remediation guidance. You always know what we are testing and why.
                                </p>
                            </details>

                            <details className="group border-t border-(--background)/20 py-4">
                                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                                    How do you handle sensitive data and access?
                                    <span className="ml-4 transition-transform duration-300 group-open:rotate-45">+</span>
                                </summary>
                                <p className="mt-3 text-(--background)/70 leading-relaxed">
                                    All work is performed under signed NDAs and rules of engagement. Access is scoped to
                                    the minimum required, credentials are handled through secure channels, and evidence
                                    is stored encrypted and destroyed on request after delivery.
                                </p>
                            </details>

                            <details className="group border-t border-(--background)/20 py-4">
                                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                                    Do you cover both offensive and defensive needs?
                                    <span className="ml-4 transition-transform duration-300 group-open:rotate-45">+</span>
                                </summary>
                                <p className="mt-3 text-(--background)/70 leading-relaxed">
                                    Yes. We operate red team and penetration testing on the offensive side, and SOC
                                    monitoring, incident response and threat intelligence on the defensive side —
                                    coordinated so findings from one directly strengthen the other.
                                </p>
                            </details>

                            <details className="group border-t border-b border-(--background)/20 py-4">
                                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                                    What do the final deliverables include?
                                    <span className="ml-4 transition-transform duration-300 group-open:rotate-45">+</span>
                                </summary>
                                <p className="mt-3 text-(--background)/70 leading-relaxed">
                                    A technical report with reproducible proof of exploitation, an C-Level summary,
                                    a prioritized remediation plan, and a follow-up validation to confirm the
                                    issues were effectively closed.
                                </p>
                            </details>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
                        <div className="flex flex-col gap-3 border-t border-(--background)/20 pt-6">
                            <span className="text-xs uppercase tracking-[0.2em] text-(--background)/50">01 — Offensive Security</span>
                            <p className="text-(--background)/80 leading-relaxed">
                                Red team operations, penetration testing and security research conducted under
                                controlled, contractual engagements. We assess exposure the way a real adversary would
                                and deliver evidence-based findings with clear remediation paths.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 border-t border-(--background)/20 pt-6">
                            <span className="text-xs uppercase tracking-[0.2em] text-(--background)/50">02 — Defensive Operations</span>
                            <p className="text-(--background)/80 leading-relaxed">
                                Continuous SOC monitoring, incident response and managed detection. Our teams detect,
                                contain and remediate threats across your infrastructure, reducing dwell time and
                                measurable business impact.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 border-t border-(--background)/20 pt-6">
                            <span className="text-xs uppercase tracking-[0.2em] text-(--background)/50">03 — Threat Intelligence</span>
                            <p className="text-(--background)/80 leading-relaxed">
                                Actionable intelligence that maps who is targeting you, how and why. We anticipate
                                emerging risks and feed those insights directly into both offensive testing and
                                defensive operations.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-5 text-center rounded-2xl text-(--foreground) w-11/12 max-w-5xl">
                    <h2 className="text-4xl font-bold">Certifications</h2>
                    <div className="flex justify-center items-center gap-5">
                        <img
                            className="w-full h-auto max-w-3xl grayscale opacity-75 transition duration-500 hover:grayscale-0 hover:opacity-100"
                            height={100}
                            width={800}
                            src="/assets/misc/Certifications.svg"
                            alt="Certifications"
                        />
                    </div>
                </div>

            </section>
        </>
    )
}