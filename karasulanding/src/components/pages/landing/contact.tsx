"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const DIAL_CODES = [
    { code: "+55", label: "BR", name: "Brazil" },
    { code: "+1", label: "US/CA", name: "United States / Canada" },
    { code: "+44", label: "UK", name: "United Kingdom" },
    { code: "+351", label: "PT", name: "Portugal" },
    { code: "+34", label: "ES", name: "Spain" },
    { code: "+33", label: "FR", name: "France" },
    { code: "+49", label: "DE", name: "Germany" },
    { code: "+39", label: "IT", name: "Italy" },
    { code: "+31", label: "NL", name: "Netherlands" },
    { code: "+41", label: "CH", name: "Switzerland" },
    { code: "+353", label: "IE", name: "Ireland" },
    { code: "+52", label: "MX", name: "Mexico" },
    { code: "+54", label: "AR", name: "Argentina" },
    { code: "+56", label: "CL", name: "Chile" },
    { code: "+57", label: "CO", name: "Colombia" },
    { code: "+244", label: "AO", name: "Angola" },
    { code: "+61", label: "AU", name: "Australia" },
    { code: "+81", label: "JP", name: "Japan" },
    { code: "+82", label: "KR", name: "South Korea" },
    { code: "+86", label: "CN", name: "China" },
    { code: "+91", label: "IN", name: "India" },
    { code: "+971", label: "AE", name: "United Arab Emirates" },
    { code: "+972", label: "IL", name: "Israel" },
    { code: "+27", label: "ZA", name: "South Africa" },
];

export default function ContactSection() {
    const [form, setForm] = useState({ fullName: "", email: "", dialCode: "+55", phone: "", message: "" });
    const [status, setStatus] = useState<Status>("idle");
    const [errorMsg, setErrorMsg] = useState("Please check the fields and try again.");
    const [dialOpen, setDialOpen] = useState(false);
    const [dialQuery, setDialQuery] = useState("");

    const filteredDial = DIAL_CODES.filter((c) => {
        const q = dialQuery.trim().toLowerCase();
        if (!q) return true;
        return (
            c.name.toLowerCase().includes(q) ||
            c.label.toLowerCase().includes(q) ||
            c.code.includes(q)
        );
    });

    const selectDial = (code: string) => {
        setForm((p) => ({ ...p, dialCode: code }));
        setDialOpen(false);
        setDialQuery("");
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

    const validate = (): string => {
        const name = form.fullName.trim();
        const letters = (name.match(/\p{L}/gu) || []).length;
        if (letters < 3 || !/^[\p{L}][\p{L}\s'.-]*$/u.test(name)) {
            return "Please enter a real name (at least 3 letters).";
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
            return "Please enter a valid email address.";
        }
        if (form.phone.trim()) {
            const digits = form.phone.replace(/\D/g, "");
            if (digits.length < 8 || digits.length > 15) {
                return "Please enter a valid phone number.";
            }
        }
        if (form.message.trim().length < 10) {
            return "Please write a message with at least 10 characters.";
        }
        return "";
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (status === "sending") return;

        const validationError = validate();
        if (validationError) {
            setErrorMsg(validationError);
            setStatus("error");
            return;
        }

        setStatus("sending");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    fullName: form.fullName,
                    email: form.email,
                    phone: form.phone ? `${form.dialCode} ${form.phone}` : "",
                    message: form.message,
                }),
            });
            if (!res.ok) throw new Error("request failed");
            setStatus("sent");
            setForm({ fullName: "", email: "", dialCode: "+55", phone: "", message: "" });
        } catch {
            setErrorMsg("Something went wrong. Please try again.");
            setStatus("error");
        }
    };

    const inputClass =
        "w-full bg-transparent border-b border-current/25 py-2 text-base md:text-lg outline-none transition-colors duration-200 placeholder:opacity-30 focus:border-current";

    const Fields = (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-5 w-full">
            <div className="flex flex-col gap-1.5 mt-3">
                <label htmlFor="fullName" className="text-[0.7rem] uppercase tracking-[0.15em] opacity-55">Full name <span className="text-(--hilight-red) opacity-100">*</span></label>
                <input id="fullName" name="fullName" type="text" required value={form.fullName} onChange={handleChange}
                    placeholder="Jane Doe"
                    className={inputClass} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-[0.7rem] uppercase tracking-[0.15em] opacity-55">Email <span className="text-(--hilight-red) opacity-100">*</span></label>
                    <input id="email" name="email" type="email" required value={form.email} onChange={handleChange}
                        placeholder="you@example.com"
                        className={inputClass} />
                </div>
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-[0.7rem] uppercase tracking-[0.15em] opacity-55">Phone <span className="opacity-50">· optional</span></label>
                    <div className="flex items-center gap-2 border-b border-current/25 focus-within:border-current transition-colors duration-200">
                        <div className="relative shrink-0">
                            <button type="button" onClick={() => setDialOpen((o) => !o)}
                                aria-label="Country code"
                                className="flex items-center gap-1 py-2 pr-1 text-base md:text-lg outline-none cursor-pointer whitespace-nowrap">
                                {form.dialCode}
                                <span className="text-xs opacity-50">▾</span>
                            </button>
                            {dialOpen && (
                                <>
                                    <div className="fixed inset-0 z-40" onClick={() => setDialOpen(false)} />
                                    <div className="absolute left-0 top-full mt-2 z-50 w-64 max-w-[70vw] overflow-hidden rounded-lg border border-white/10 bg-neutral-900 text-white shadow-2xl">
                                        <input autoFocus value={dialQuery} onChange={(e) => setDialQuery(e.target.value)}
                                            placeholder="Search country…"
                                            className="w-full border-b border-white/10 bg-transparent px-3 py-2 text-sm outline-none placeholder:opacity-40" />
                                        <ul className="max-h-56 overflow-y-auto py-1">
                                            {filteredDial.length === 0 && (
                                                <li className="px-3 py-2 text-sm opacity-50">No matches</li>
                                            )}
                                            {filteredDial.map((c) => (
                                                <li key={`${c.code}-${c.label}`}>
                                                    <button type="button" onClick={() => selectDial(c.code)}
                                                        className="flex w-full items-center justify-between gap-3 px-3 py-2 text-left text-sm transition-colors hover:bg-white/10">
                                                        <span className="truncate">{c.name}</span>
                                                        <span className="shrink-0 opacity-60">{c.code}</span>
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </>
                            )}
                        </div>
                        <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange}
                            placeholder="(11) 91234-5678"
                            className="w-full bg-transparent py-2 text-base md:text-lg outline-none placeholder:opacity-30" />
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-[0.7rem] uppercase tracking-[0.15em] opacity-55">Message <span className="text-(--hilight-red) opacity-100">*</span></label>
                <textarea id="message" name="message" required rows={3} value={form.message} onChange={handleChange}
                    placeholder="Detail your problem here..."
                    className="w-full resize-none rounded-xl bg-current/5 border border-current/15 p-3 text-base outline-none transition-colors duration-200 placeholder:opacity-30 focus:border-current/40 focus:bg-current/10" />
            </div>

            <div className="flex items-center justify-between gap-4 mt-1">
                <span
                    aria-live="polite"
                    className={`text-sm transition-all duration-200 ${
                        status === "error"
                            ? "px-3 py-1.5 rounded-md border border-(--hilight-red)/50 bg-(--hilight-red)/10 text-(--hilight-red) font-medium"
                            : status === "sent"
                            ? "opacity-70"
                            : "opacity-0"
                    }`}
                >
                    {status === "sent" && "Message sent — we'll be in touch."}
                    {status === "error" && `⚠ ${errorMsg}`}
                </span>
                <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex items-center gap-2 px-6 py-2.5 font-semibold bg-(--hilight-purple) border-b-4 border-(--dark-purple) transition duration-200 hover:brightness-110 hover:mt-[7px] hover:border-b-2 active:mt-[7px] active:border-b-2 disabled:opacity-60 disabled:pointer-events-none"
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