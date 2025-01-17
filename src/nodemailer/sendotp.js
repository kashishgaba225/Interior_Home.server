const nodemailer = require("nodemailer");
require('dotenv').config()


const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    port: 465,
    auth: {
        user: process.env.NodeMailerUser,
        pass: process.env.NodeMailerPass,
    },
});


exports.otpSender = async (name, email, randomOtp) => {
    try {

        const info = await transporter.sendMail({
            from: '"Kashish" <your-email@gmail.com>',
            to: email,
            subject: "Your Email OTP to Reset Password on MoviesAll",

            html: `
           <div style="background-color:#2C3E50;padding:20px;color:#fff;font-family:Arial, sans-serif;border-radius:10px;">
    <h2 style="color:#E67E22;">DreamSpace Interiors</h2>
    <p>Hi ${name},</p>
    <p>Your One Time Password (OTP) for account verification :</p>
    <div style="background-color:#fff;color:#000;font-size:24px;font-weight:bold;text-align:center;padding:10px;margin:20px 0;border-radius:5px;">
        ${randomOtp}
    </div>
    <p>The OTP is valid for 5 minutes.</p>
    <p>For security reasons, please do not share your OTP with anyone.</p>
    <br>
    <p>Warm regards,</p>
    <p>The DreamSpace Interiors Team</p>
</div>

            `,
        });

        console.log(`Message sent: ${info.messageId}`);


    } catch (error) {
        console.log({ msg: "Failed to send email", data: error });
    }
}
