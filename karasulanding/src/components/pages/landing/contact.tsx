"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactSection() {
    const [form, setForm] = useState({ fullName: "", email: "", phone: "", message: "" });
    const [status, setStatus] = useState<Status>("idle");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (status === "sending") return;
        setStatus("sending");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            if (!res.ok) throw new Error("request failed");
            setStatus("sent");
            setForm({ fullName: "", email: "", phone: "", message: "" });
        } catch {
            setStatus("error");
        }
    };

    const inputClass =
        "w-full bg-transparent border-b border-current/25 py-2 text-base md:text-lg outline-none transition-colors duration-200 placeholder:opacity-30 focus:border-current";

    const Fields = (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-5 w-full">
            <div className="flex flex-col gap-1.5 mt-3">
                <label htmlFor="fullName" className="text-[0.7rem] uppercase tracking-[0.15em] opacity-55">Full name</label>
                <input id="fullName" name="fullName" type="text" required value={form.fullName} onChange={handleChange}
                    placeholder="Jane Doe"
                    className={inputClass} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-[0.7rem] uppercase tracking-[0.15em] opacity-55">Email</label>
                    <input id="email" name="email" type="email" required value={form.email} onChange={handleChange}
                        placeholder="you@example.com"
                        className={inputClass} />
                </div>
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-[0.7rem] uppercase tracking-[0.15em] opacity-55">Phone <span className="opacity-50">· optional</span></label>
                    <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange}
                        placeholder="(11) 91234-5678"
                        className={inputClass} />
                </div>
            </div>

            <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-[0.7rem] uppercase tracking-[0.15em] opacity-55">Message</label>
                <textarea id="message" name="message" required rows={3} value={form.message} onChange={handleChange}
                    placeholder="Detail your problem here..."
                    className="w-full resize-none rounded-xl bg-current/5 border border-current/15 p-3 text-base outline-none transition-colors duration-200 placeholder:opacity-30 focus:border-current/40 focus:bg-current/10" />
            </div>

            <div className="flex items-center justify-between gap-4 mt-1">
                <span
                    aria-live="polite"
                    className={`text-sm ${status === "error" ? "text-(--hilight-red)" : "opacity-70"}`}
                >
                    {status === "sent" && "Message sent — we'll be in touch."}
                    {status === "error" && "Something went wrong. Try again."}
                </span>
                <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex items-center gap-2 px-6 py-2.5 font-semibold text-white bg-(--hilight-purple) border-b-4 border-(--dark-purple) transition duration-200 hover:brightness-110 hover:mt-[7px] hover:border-b-2 active:mt-[7px] active:border-b-2 disabled:opacity-60 disabled:pointer-events-none"
                >
                    {status === "sending" ? "SENDING…" : "SEND"} <span aria-hidden>→</span>
                </button>
            </div>
        </form>
    );

    return (
        <section id="contact" className="w-full flex flex-col items-center py-16 md:py-24 px-4">
            <div className="hidden md:flex flex-col items-center w-full">

                <div className="relative w-full max-w-7xl aspect-[1532/801]">
                    <img
                        src="/assets/backgrounds/KarasuDarkBars.svg"
                        alt="Karasu barcode"
                        draggable={false}
                        className="absolute -left-8 top-1/2 -translate-y-1/2 z-10 h-[45%] w-auto object-contain invert dark:invert-0 opacity-90 select-none pointer-events-none"
                    />
                    <img src="/assets/backgrounds/KarasuContactDark.svg" alt=""
                        className="absolute inset-0 w-full h-full object-contain dark:hidden select-none" />
                    <img src="/assets/backgrounds/KarasuContactLight.svg" alt=""
                        className="absolute inset-0 w-full h-full object-contain hidden dark:block select-none" />

                    <div className="absolute top-[21%] left-[14.7%] right-[14.2%] bottom-[9%] flex items-start justify-center text-(--background)">
                        <div className="w-[92%] max-w-2xl flex flex-col">
                            <span className="text-[0.7rem] uppercase tracking-[0.3em] opacity-50">— Get in touch</span>
                            <h2 className="text-2xl lg:text-3xl font-bold font-(family-name:--font-Handjet)">
                                Contact our consultants
                            </h2>
                            <p className="text-sm opacity-70 mt-1">
                                Tell us what you are protecting — we will show you how an adversary sees it.
                            </p>
                            {Fields}
                        </div>
                    </div>
                </div>
            </div>

            <div className="md:hidden w-full max-w-md bg-(--foreground) text-(--background) rounded-[2rem] p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-center font-(family-name:--font-Handjet)">
                    Contact our consultants
                </h2>
                {Fields}
            </div>
        </section>
    );
}