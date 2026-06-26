import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Missing RESEND_API_KEY." },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const body = await request.json();
    const { name, phone, email, vehicle, service, message } = body;

    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: "Name, phone and message are required." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from:
        process.env.CONTACT_FROM_EMAIL ||
        "EB Autoworks <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL || "garage@email.com",
      subject: `New EB Autoworks enquiry from ${name}`,
      replyTo: email || undefined,
      html: `
        <h2>New EB Autoworks Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || "Not provided"}</p>
        <p><strong>Vehicle:</strong> ${vehicle || "Not provided"}</p>
        <p><strong>Service Needed:</strong> ${service || "Not selected"}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "Something went wrong sending the enquiry." },
      { status: 500 }
    );
  }
}