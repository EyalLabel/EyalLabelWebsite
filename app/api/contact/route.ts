import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Force dynamic rendering for API routes
export const dynamic = "force-dynamic";

// Test endpoint to verify the route is accessible
export async function GET() {
  return NextResponse.json({ message: "Contact API is working" });
}

export async function POST(request: NextRequest) {
  console.log("POST request received to /api/contact");

  try {
    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service not configured - RESEND_API_KEY missing" },
        { status: 500 }
      );
    }

    console.log("API Key configured:", process.env.RESEND_API_KEY ? "Yes" : "No");
    console.log("Contact Email configured:", process.env.CONTACT_EMAIL || "Not set");

    const { subject, name, email, message } = await request.json();
    console.log("Received form data:", { subject, name, email, message: message.substring(0, 50) + "..." });

    // Validate required fields
    if (!subject || !name || !email || !message) {
      console.log("Validation failed - missing required fields");
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    console.log("Attempting to send email with Resend...");

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL || "your-email@example.com"],
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: `Failed to send email: ${error.message || 'Unknown error'}` },
        { status: 500 }
      );
    }

    console.log("Email sent successfully:", data);
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: `Failed to send email: ${error instanceof Error ? error.message : 'Unknown error'}` },
      { status: 500 }
    );
  }
} 