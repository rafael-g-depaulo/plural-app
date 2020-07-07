const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const aws = require("aws-sdk")
const util = require("util");

aws.config.update({
  secretAccessKey: process.env.AWS_SECRET,
  accessKeyId: process.env.AWS_KEY,
  region: 'sa-east-1'
});
const s3 = new aws.S3();

module.exports = {
  signToken(id, email) {
    const token = jwt.sign(
      { user: { id, email } },
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

    const mailLinkUrl = `${process.env.SERVER_URL}api/user/verify-email/${token}`;
    const mailOptions = {
      from: process.env.EMAIL,
      to: user.email,
      subject: "Verifique sua conta no Plural!",
      html:
        "<p>Olá,</p>" +
        `<p>Para utilizar o app Plural, você deve confirmar o seu email clicando no link a seguir: <a href="${mailLinkUrl}">Clique em mim para confirmar a sua conta!</a></p>`
        ,
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

    const mailLinkUrl = `${process.env.CLIENT_URL}password-reset/${token}`;
    const mailOptions = {
      from: process.env.EMAIL,
      to: user.email,
      subject: "Alteração de senha - App Plural",
      html:
        "<p>Olá,</p>" +
        `<p>Para redefinir sua senha, acesse o seguinte link: <a href="${mailLinkUrl}">Clique aqui para escolher uma senha nova</a></p>`
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
  uploadImage(req) {
    return new Promise((resolve, reject) => {      
      var base64data = new Buffer(req.file.buffer, 'binary');
      
      const extension = /\.[0-9a-z]+$/i.exec(req.file.originalname)[0]
      
      const params = {
        ACL: 'public-read',
        Bucket: process.env.AWS_BUCKET,
        Body: base64data,
        Key: `userAvatar/${req.file.originalname}-${new Date()}${extension}`
      }

      s3.upload(params, (err, data) => {
        if (err) reject(err)
        else resolve(data.Location)
      })
    })
  }
};
