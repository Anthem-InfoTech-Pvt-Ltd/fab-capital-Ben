
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, company, type, message } = await req.json();

    // Create transporter with direct SMTP details
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",            // SMTP Server
      port: 587,                         // Port for TLS
      secure: false,                     // false for TLS
      auth: {
        user: "Website@fabcap.co.uk", // SMTP username (full email)
        pass: "khelgarpkexqziyt",              // SMTP password 
      },
    });

    // Test connection
    await transporter.verify();
    console.log("SMTP connection successful");

    // Send email
    const info = await transporter.sendMail({
      from: `"Fabcap" <Website@fabcap.co.uk>`, // verified sender
      replyTo: email,                                           // user's email from form
      to: "investment@fabcap.co.uk",                       // receiver
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Type:</strong> ${type}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });
    console.log("Email sent:", info.messageId);
    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    if (error.response) console.error("SMTP Response:", error.response);

    return new Response(
      JSON.stringify({
        success: false,
        message: "Failed to send email",
        error: error.message, // shows exact error
      }),
      { status: 500 }
    );
  }
}

// import nodemailer from "nodemailer";

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const { name, email, phone, company, type, message } = body;

//     // Temporary SMTP (fake config — replace when client gives details)
//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",    // SMTP Server Address
//       port: 587,                 // Port (587 for TLS)
//       secure: false,             // false for TLS, true for SSL
//       auth: {
//         user: "investment@fabcap.co.uk", // Username (full email)
//         pass: "Success01!123",  // App Password (replace later)
//       },
//       // host: "smtp.example.com",   
//       // port: 587,
//       // secure: false,
//       // auth: {
//       //   user: "username@example.com", 
//       //   pass: "Success01!",        
//       // },
//     });

//     // Email content
//     await transporter.sendMail({
//       from: `"Website Contact Form" <investment@fabcap.co.uk>`,
//       to: "priyanka@antheminfotech.com",  // RECEIVER
//       //   to: "investment@fabcap.co.uk",   // RECEIVER
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

//     return Response.json({ success: true, message: "Email sent successfully" });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return Response.json(
//       { success: false, message: "Failed to send email" },
//       { status: 500 }
//     );
//   }
// }





// import nodemailer from "nodemailer";

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const { name, email, phone, company, type, message } = body;

//     // Create a test account
//     const testAccount = await nodemailer.createTestAccount();

//     const transporter = nodemailer.createTransport({
//       host: testAccount.smtp.host,
//       port: testAccount.smtp.port,
//       secure: testAccount.smtp.secure, // true for 465, false for other ports
//       auth: {
//         user: testAccount.user,
//         pass: testAccount.pass,
//       },
//     });

//     const info = await transporter.sendMail({
//       from: `"Website Contact Form" <no-reply@example.com>`,
//       to: "priyanka@antheminfotech.com", // receiver (won’t really receive it, just for testing)
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

//     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

//     return new Response(
//       JSON.stringify({ success: true, message: "Email sent successfully", preview: nodemailer.getTestMessageUrl(info) }),
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return new Response(
//       JSON.stringify({ success: false, message: "Failed to send email" }),
//       { status: 500 }
//     );
//   }
// }


