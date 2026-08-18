import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { orgName, facilityType, location, contactName, email, phone, message } = body;

    // Basic Validation
    if (!orgName || !facilityType || !location || !contactName || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: "RemoteWard Partnerships <onboarding@resend.dev>",
      to: "partnerships@remoteward.com", // Fallback sandbox target
      subject: `New Partnership Request: ${orgName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; rounded-lg">
          <h2 style="color: #3AB2B4; margin-bottom: 20px;">New Partner Application</h2>
          <p>A new hospital/clinic has requested to join the RemoteWard network.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr style="background-color: #f8fafc;">
              <td style="padding: 10px; font-weight: bold; border: 1px solid #e2e8f0;">Organization Name</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">${orgName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; border: 1px solid #e2e8f0;">Facility Type</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">${facilityType}</td>
            </tr>
            <tr style="background-color: #f8fafc;">
              <td style="padding: 10px; font-weight: bold; border: 1px solid #e2e8f0;">Location</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">${location}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; border: 1px solid #e2e8f0;">Contact Person</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">${contactName}</td>
            </tr>
            <tr style="background-color: #f8fafc;">
              <td style="padding: 10px; font-weight: bold; border: 1px solid #e2e8f0;">Email Address</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; border: 1px solid #e2e8f0;">WhatsApp / Phone</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">${phone}</td>
            </tr>
          </table>

          ${message ? `
            <div style="margin-top: 20px; padding: 15px; background-color: #f1f5f9; border-left: 4px solid #3AB2B4; border-radius: 4px;">
              <h4 style="margin: 0 0 10px 0; color: #1e293b;">Additional Details:</h4>
              <p style="margin: 0; color: #475569;">${message}</p>
            </div>
          ` : ""}
          
          <div style="margin-top: 30px; font-size: 12px; color: #64748b; text-align: center;">
            This email was sent from the RemoteWard Landing Page integration.
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error sending email via Resend:", error);
    const errorMessage = error instanceof Error ? error.message : "Failed to submit request";
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
