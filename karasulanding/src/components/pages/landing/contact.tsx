"use client";

import { useState } from "react";

export default function ContactSection() {
    const [form, setForm] = useState({ fullName: "", email: "", phone: "", message: "" });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(form);
    };

    const Fields = (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
            <div className="flex flex-col gap-1 mt-14">
                <label htmlFor="fullName" className="self-end text-xs uppercase tracking-wider opacity-70">Full name</label>
                <input id="fullName" name="fullName" type="text" required value={form.fullName} onChange={handleChange}
                    placeholder="FULL NAME"
                    className="w-full bg-transparent border-b border-current/40 py-1.5 text-lg outline-none placeholder:opacity-40 focus:border-current" />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="email" className="self-end text-xs uppercase tracking-wider opacity-70">Email</label>
                <input id="email" name="email" type="email" required value={form.email} onChange={handleChange}
                    placeholder="youremail@example.com"
                    className="w-full bg-transparent border-b border-current/40 py-1.5 text-lg outline-none placeholder:opacity-40 focus:border-current" />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="phone" className="self-end text-xs uppercase tracking-wider opacity-70">[optional] Phone</label>
                <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange}
                    placeholder="(11) 91234-5678"
                    className="w-full bg-transparent border-b border-current/40 py-1.5 text-lg outline-none placeholder:opacity-40 focus:border-current" />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="message" className="self-end text-xs uppercase tracking-wider opacity-70">Message</label>
                <textarea id="message" name="message" required rows={3} value={form.message} onChange={handleChange}
                    placeholder="Detail your problem here..."
                    className="w-full resize-none rounded-xl bg-current/10 p-3 text-base outline-none placeholder:opacity-40 focus:ring-1 focus:ring-current/40" />
            </div>
            <button type="submit" className="self-end quaternary-btn">SEND →</button>
        </form>
    );

    return (
        <section id="contact" className="w-full flex justify-center py-20 px-4">
            <div className="hidden md:block relative w-full max-w-6xl aspect-[1532/756]">
                <img src="/assets/backgrounds/KarasuContactDark.svg" alt=""
                    className="absolute inset-0 w-full h-full object-contain dark:hidden" />
                <img src="/assets/backgrounds/KarasuContactLight.svg" alt=""
                    className="absolute inset-0 w-full h-full object-contain hidden dark:block" />

                {/* Overlay = área do card; form centrado dentro dela */}
                <div className="absolute top-[11%] left-[14.4%] right-[14.5%] bottom-[7%] flex items-center justify-center text-(--background)">
                    <div className="w-[58%]">
                        {Fields}
                    </div>
                </div>
            </div>

            <div className="md:hidden w-full max-w-md bg-(--foreground) text-(--background) rounded-[2rem] p-6">
                <h2 className="text-2xl font-bold text-center mb-6 font-(family-name:--font-Handjet)">
                    Contact our consultants.
                </h2>
                {Fields}
            </div>
        </section>
    );
}