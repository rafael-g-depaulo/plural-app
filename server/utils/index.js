const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

module.exports = {
  signToken(id, email, activeStatus, lgbtqStatus) {
    console.log(id, email, activeStatus, lgbtqStatus)
    
    const token = jwt.sign(
      { user: { id, email, active: activeStatus, isLgbtq: lgbtqStatus } },
      process.env.TOKEN_SECRET_KEY,
      { expiresIn: parseInt(process.env.TOKEN_EXPIRATION_TIME) }
    );

    return token;
  },
  sendConfirmationEmail(user, token) {
    const transporter = nodemailer.createTransport({
      service: "Sendgrid",
      auth: {
        user: process.env.SENDGRID_USERNAME,
        pass: process.env.SENDGRID_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: user.email,
      subject: "Verifique sua conta no Plural!",
      text:
        "Olá,\n\n" +
        "Para utilizar o app Plural, você deve confirmar o seu email em: \n" + 
        process.env.SERVER_URL +
        "api/user/verify-email/" +
        token +
        "\n",
    };
    transporter.sendMail(mailOptions, function (err) {
      if (err) {
        console.log('Error when sending email:', err)
        
        return false;
      }

      console.log("Confirmation email sent!")
      return true;
    });
  },
};
