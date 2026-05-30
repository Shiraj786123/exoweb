import nodemailer from "nodemailer";

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, phone, company, message, service, budget } = req.body;

  try {

    const transporter = nodemailer.createTransport({
      host: "mail.zonzoctech.com",   // your cPanel mail server
      port: 465,
      secure: true,
      auth: {
        user: "info@zonzoctech.com",
        pass: process.env.EMAIL_PASS
      },
      tls: {
        rejectUnauthorized: false,
      }
    });

    await transporter.sendMail({
      from: `"Zonzoctech Website" <info@zonzoctech.com>`,
      to: "info@zonzoctech.com",
      subject: `New message from ${name}`,
      html: `
        <h3>New Website Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Company:</b> ${company}</p>
        ${service ? `<p><b>Service:</b> ${service}</p>` : ""}
        ${budget ? `<p><b>Budget:</b> $${budget}</p>` : ""}
        <p><b>Message:</b></p>
        <p>${message}</p>
      `
    });

    return res.status(200).json({ success: true });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      error: "Email sending failed"
    });

  }
}