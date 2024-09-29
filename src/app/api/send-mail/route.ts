import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import env from "../../../../env";

/**
 * Setup Nodemailer In few steps
 * Require or Import Nodemailer after installation
 * configure Nodemailer
 * Get the app password for gmail
 */

interface BodyResponse {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface MailInfo {
  accepted: string[]; // List of recipients that were accepted by the server
  rejected: string[]; // List of recipients that were rejected by the server
  ehlo: string[]; // Array of server capabilities
  envelopeTime: number; // Time taken to complete the SMTP handshake (in milliseconds)
  messageTime: number; // Time taken to send the message (in milliseconds)
  messageSize: number; // Size of the message (in bytes)
  response: string; // The server response to the email
  envelope: {
    from: string; // Sender's email address
    to: string[]; // List of recipient email addresses
  };
  messageId: string; // Unique message identifier assigned by the server
}

const transporter = nodemailer.createTransport({
  service: env.SMTP_SERVICE,
  host: env.SMTP_HOST,
  port: env.SMTP_PORT,
  secure: env.SMTP_SECURE,
  auth: {
    user: env.SMTP_EMAIL,
    pass: env.SMTP_PASS,
  },
});

export async function POST(req: NextRequest) {
  try {
    const body: BodyResponse = await req.json();

    const mailOptions = {
      from: env.SMTP_EMAIL,
      to: body.email,
      subject: body.subject,
      html: `
        
        `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { status: 200, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { status: 500, message: "Something went wrong at server" },
      { status: 500 }
    );
  }
}
