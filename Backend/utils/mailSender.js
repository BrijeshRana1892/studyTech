const nodemailer = require("nodemailer")

const mailSender = async (email, title, body) => {
  try {
    console.log("INNN");
    console.log(process.env.MAIL_USER,process.env.MAIL_PASS,"USERRR");
    let transporter = nodemailer.createTransport({
      service: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    })

    let info = await transporter.sendMail({
      from: `"StudyTech | Brijesh" <${process.env.MAIL_USER}>`,
      to: `${email}`,
      subject: `${title}`,
      html: `${body}`,
    })
    console.log("Success",info.response)
    return info
  } catch (error) {
    console.log(error.message)
    return error.message
  }
}

module.exports = mailSender
