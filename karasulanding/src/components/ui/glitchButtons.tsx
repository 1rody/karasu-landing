"use client";

import { useEffect } from "react";

const SYMBOLS = "@#$%&*!?/<>=+".split("");
const SELECTOR = ".primary-btn, .secondary-btn, .tertiary-btn";

const FRAME_MS = 45;
const FRAMES_PER_CHAR = 2;

export default function GlitchButtons() {
    useEffect(() => {
        const rand = () => SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
        const running = new Map<HTMLElement, number>();

        const scramble = (host: HTMLElement, original: string) => {
            const existing = running.get(host);
            if (existing) window.clearInterval(existing);

            const chars = Array.from(original);
            const total = chars.length * FRAMES_PER_CHAR + 3;
            let frame = 0;

            const id = window.setInterval(() => {
                frame++;
                const revealed = Math.floor(frame / FRAMES_PER_CHAR);
                let out = "";
                for (let i = 0; i < chars.length; i++) {
                    const ch = chars[i];
                    if (ch === " ") out += " ";
                    else if (i < revealed) out += ch;
                    else out += rand();
                }
                host.textContent = out;

                if (frame >= total) {
                    window.clearInterval(id);
                    host.textContent = original;
                    running.delete(host);
                }
            }, FRAME_MS);

            running.set(host, id);
        };

        const cleanups: Array<() => void> = [];

        document.querySelectorAll<HTMLElement>(SELECTOR).forEach((el) => {
            let host: HTMLElement = el;
            while (
                host.children.length === 1 &&
                (host.children[0] as HTMLElement).textContent === host.textContent
            ) {
                host = host.children[0] as HTMLElement;
            }

            const original = host.textContent ?? "";
            if (!original.trim()) return;

            const onEnter = () => scramble(host, original);
            el.addEventListener("mouseenter", onEnter);

            cleanups.push(() => {
                el.removeEventListener("mouseenter", onEnter);
                const id = running.get(host);
                if (id) window.clearInterval(id);
                host.textContent = original;
            });
        });

        return () => cleanups.forEach((c) => c());
    }, []);

    return null;
}
