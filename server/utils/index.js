const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

module.exports = {
  signToken(id, email) {  
    const token = jwt.sign(
      { user: { id, email} },
      process.env.TOKEN_SECRET_KEY,
      { expiresIn: parseInt(process.env.TOKEN_EXPIRATION_TIME) }
    );

    return token;
  },
  signPasswordResetToken(id, email) {
    const token = jwt.sign(
      { user: { id, email } },
      process.env.PASSWORD_RESET_TOKEN_SECRET_KEY,
      { expiresIn: parseInt(process.env.PASSWORD_RESET_TOKEN_EXPIRATION_TIME) }
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

    const mailLinkUrl = `${process.env.SERVER_URL}api/user/verify-email/${token}`
    const mailOptions = {
      from: process.env.EMAIL,
      to: user.email,
      subject: "Verifique sua conta no Plural!",
      text:
        "Olá,\n\n" +
        "Para utilizar o app Plural, você deve confirmar o seu email em: \n" +
        mailLinkUrl +
        "\n",
    };
    transporter.sendMail(mailOptions, function(err) {
      if (err) {
        console.log("Error when sending email:", err);

        return false;
      }

      console.log("Confirmation email sent!");
      return true;
    });
  },
  async sendPasswordResetEmail(user, token) {
    const transporter = nodemailer.createTransport({
      service: "Sendgrid",
      auth: {
        user: process.env.SENDGRID_USERNAME,
        pass: process.env.SENDGRID_PASSWORD,
      },
    });

    const mailLinkUrl = `${process.env.CLIENT_URL}password-reset/${token}`
    const mailOptions = {
      from: process.env.EMAIL,
      to: user.email,
      subject: "Alteração de senha - App Plural",
      text:
        "Olá,\n\n" +
        "Para redefinir sua senha, acesse o seguinte link: \n" +
        mailLinkUrl +
        "\n",
    };

    await transporter.sendMail(mailOptions, function(err) {
      if (err) {
        console.log("Error when sending email:", err);

        return false;
      }

      console.log("Password reset email sent!");

      return true;
    });
  },
};
