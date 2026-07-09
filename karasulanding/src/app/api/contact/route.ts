import { NextResponse } from "next/server";

type ContactPayload = {
    fullName?: string;
    email?: string;
    phone?: string;
    message?: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (!webhookUrl) {
        return NextResponse.json(
            { error: "Contact endpoint is not configured." },
            { status: 500 }
        );
    }

    let body: ContactPayload;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }

    const fullName = body.fullName?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const phone = body.phone?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    if (!fullName || !email || !message) {
        return NextResponse.json(
            { error: "Name, email and message are required." },
            { status: 400 }
        );
    }
    if (!emailRegex.test(email)) {
        return NextResponse.json({ error: "Invalid email." }, { status: 400 });
    }
    if (message.length > 2000 || fullName.length > 256) {
        return NextResponse.json({ error: "Message too long." }, { status: 400 });
    }

    const discordPayload = {
        username: "Karasu — Contact",
        embeds: [
            {
                title: "New contact request",
                color: 0xb049ff,
                fields: [
                    { name: "Name", value: fullName, inline: true },
                    { name: "Email", value: email, inline: true },
                    { name: "Phone", value: phone || "—", inline: true },
                    { name: "Message", value: message.slice(0, 1024) },
                ],
                timestamp: new Date().toISOString(),
            },
        ],
    };

    try {
        const res = await fetch(webhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(discordPayload),
        });

        if (!res.ok) {
            return NextResponse.json(
                { error: "Failed to deliver message." },
                { status: 502 }
            );
        }
    } catch {
        return NextResponse.json(
            { error: "Failed to deliver message." },
            { status: 502 }
        );
    }

    return NextResponse.json({ ok: true });
}
