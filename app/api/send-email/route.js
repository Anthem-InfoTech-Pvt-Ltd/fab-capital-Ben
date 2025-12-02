import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, company, type, message } = await req.json();

    // Create transporter with SMTP configuration
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "Website@fabcap.co.uk",
        pass: "khelgarpkexqziyt",
      },
    });

    // Verify connection
    await transporter.verify();
    console.log("SMTP connection successful");

    // Send email
    const info = await transporter.sendMail({
  from: `"Fabcap" <Website@fabcap.co.uk>`,
  replyTo: email,
  to: "investment@fabcap.co.uk",
  subject: "fabcap.co.uk | New Inquiry Received",
  html: `
    <div style="font-family: Arial, sans-serif; background: #f5f5f5; padding: 25px;">
      <div style="max-width: 650px; margin: auto; background: #ffffff; border-radius: 8px; padding: 25px 30px; border: 1px solid #e0e0e0;">

        <p style="font-size: 16px; color: #222; margin-bottom: 10px;">
          Hello Team,
        </p>

        <p style="font-size: 15px; color: #444; ">
          A new inquiry has been submitted through the <strong>fabcap.co.uk</strong> contact form.
        </p>

        <p style="font-size: 15px; color: #444; margin-top: 25px; margin-bottom: 10px;">
          <strong>Please find the details below:</strong>
        </p>

        <div style="font-size: 15px; color: #333; line-height: 1.7;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Message:</strong><br>${message}</p>
        </div>

        <p style="font-size: 15px; color: #444; margin-top: 25px; line-height: 1.6;">
          Please review and respond at your earliest convenience.
        </p>
        <p style="font-size: 15px; color: #222; margin-top: 30px;">
          Regards,<br>
          <strong>fabcap.co.uk – Website Notification System</strong>
        </p>

      </div>
    </div>
  `,
});

    // LOGGING WHERE EMAIL WAS SENT
    console.log("Email sent successfully to:", info.accepted);
    console.log("Rejected recipients:", info.rejected);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Email sent successfully",
        sentTo: info.accepted,
      }),
      { status: 200 }
    );

  } catch (error) {
    console.error("Error sending email:", error);
    if (error.response) console.error("SMTP Response:", error.response);

    return new Response(
      JSON.stringify({
        success: false,
        message: "Failed to send email",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}




// import nodemailer from "nodemailer";

// export async function POST(req) {
//   try {
//     const { name, email, phone, company, type, message } = await req.json();

//     // Create transporter with direct SMTP details
//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",            // SMTP Server
//       port: 587,                         // Port for TLS
//       secure: false,                     // false for TLS
//       auth: {
//         user: "Website@fabcap.co.uk", // SMTP username (full email)
//         pass: "khelgarpkexqziyt",              // SMTP password 
//       },
//     });

//     // Test connection
//     await transporter.verify();
//     console.log("SMTP connection successful");

//     // Send email
//     const info = await transporter.sendMail({
//       from: `"Fabcap" <Website@fabcap.co.uk>`, // verified sender
//       replyTo: email,                                           // user's email from form
//       to: "investment@fabcap.co.uk",                       // receiver
//       subject: "New Contact Form Submission",
//       html: `
//         <h2>New Contact Form Submission</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <p><strong>Company:</strong> ${company}</p>
//         <p><strong>Type:</strong> ${type}</p>
//         <p><strong>Message:</strong><br>${message}</p>
//       `,
//     });
//     console.log("Email sent:", info.messageId);
//     return new Response(
//       JSON.stringify({ success: true, message: "Email sent successfully" }),
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error sending email:", error);
//     if (error.response) console.error("SMTP Response:", error.response);

//     return new Response(
//       JSON.stringify({
//         success: false,
//         message: "Failed to send email",
//         error: error.message, // shows exact error
//       }),
//       { status: 500 }
//     );
//   }
// }

