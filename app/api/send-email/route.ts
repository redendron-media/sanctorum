import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const userEmailRequest = await axios.post(
      "https://api.brevo.com/v3/smtp/email",

      {
        templateId: 3,
        to: [{
            "email":email,
        }],
        params: {
          "contact.FIRSTNAME": name,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          "api-key": process.env.BREVO_API_KEY, 
        },
      }
    );

    const adminEmailRequest = await axios.post(
        "https://api.brevo.com/v3/smtp/email",
        {
            templateId: 2,
            to: [{ "email": 'sanctorumcoworking@gmail.com' }], 
            
            params: {
                "CNAME": name,
                "CEMAIL": email,
                "CPHONE": phone,         
            },
        },
        {
            headers: {
                "Content-Type": "application/json",
                "api-key": process.env.BREVO_API_KEY,
                "accept": "application/json"
            },
        }
    );

    await Promise.all([userEmailRequest, adminEmailRequest]);

    return NextResponse.json({ message: "Email sent successfully" });
  }catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.error('Brevo API Error:', error.response.data);
      return NextResponse.json(
        { error: 'Failed to send emails', details: error.response.data },
        { status: error.response.status }
      );
    }

    console.error('Unexpected Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}