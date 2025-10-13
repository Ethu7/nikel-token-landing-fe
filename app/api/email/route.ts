import { type NextRequest, NextResponse } from "next/server";
import { SendEmailCommand } from "@aws-sdk/client-ses";
import { sesClient } from "./ses-client";

export async function POST(request: NextRequest) {
  const { email, name, message } = await request.json();

  const createSendEmailCommand = (toAddress: string, fromAddress: string) => {
    return new SendEmailCommand({
      Source: fromAddress,
      Destination: {
        ToAddresses: [toAddress],
      },
      Message: {
        Body: {
          Text: {
            Charset: "UTF-8",
            Data: message,
          },
        },
        Subject: {
          Charset: "UTF-8",
          Data: `Message from ${name} (${email})`,
        },
      },
    });
  };

  if (process.env.CONTACT_EMAIL) {
    const sendEmailCommand = createSendEmailCommand(
      process.env.CONTACT_EMAIL,
      process.env.CONTACT_EMAIL
    );

    try {
      await sesClient.send(sendEmailCommand);
      return NextResponse.json({ message: "Email sent" });
    } catch (err) {
      return NextResponse.json({ error: err }, { status: 500 });
    }
  } else {
    return NextResponse.json(
      { error: "Cannot find contact email" },
      { status: 500 }
    );
  }
}
