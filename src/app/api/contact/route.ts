import { NextResponse } from "next/server";
import { Resend } from "resend";
import type { ContactFormPayload } from "@/types";
import { siteContent } from "@/lib/content";

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<ContactFormPayload>;

  if (!body.name || !body.email || !body.message || !body.consent) {
    return NextResponse.json(
      { error: "Hiányzó vagy hiányos mezők." },
      { status: 400 }
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    // Fejlesztés közben, amíg nincs beállítva a Resend API kulcs, csak
    // naplózzuk az üzenetet, hogy a form tesztelhető legyen.
    console.warn(
      "[contact] RESEND_API_KEY hiányzik – az üzenet nem lett elküldve, csak naplózva:",
      body
    );
    return NextResponse.json({ ok: true, delivered: false });
  }

  const resend = new Resend(resendApiKey);

  try {
    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev",
      to: siteContent.contact.email,
      replyTo: body.email,
      subject: `Új üzenet a weboldalról – ${body.name}`,
      text: [
        `Név: ${body.name}`,
        `Email: ${body.email}`,
        body.phone ? `Telefon: ${body.phone}` : null,
        "",
        body.message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[contact] Email küldési hiba:", err);
    return NextResponse.json(
      { error: "Az üzenet küldése sikertelen volt." },
      { status: 500 }
    );
  }
}
