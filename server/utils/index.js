const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const { Storage } = require("@google-cloud/storage");
const util = require("util");

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
  async uploadImageToGCS(file) {
    const gc = new Storage({
      projectId: "plural-282215",
      credentials: {
        private_key: process.env.GCS_PRIVATE_KEY.replace("-----BEGIN PRIVATE KEY-----\n", "-----BEGIN PRIVATE KEY-----").replace(/\\n/g, "\n"),
        client_email: process.env.GCS_CLIENT_EMAIL,
      },
    });

    const bucket = gc.bucket(process.env.GCS_BUCKET);

    return new Promise((resolve, reject) => {
      // Create a new blob in the bucket and upload the file data.
      const blob = bucket.file(file.originalname);
      const blobStream = blob.createWriteStream();

      blobStream.on("error", (err) => {
        console.log("[ERROR]", err);

        reject("Something went wrong when uploading image");
      });

      blobStream.on("finish", () => {
        const publicUrl = util.format(
          `https://storage.googleapis.com/${bucket.name}/${blob.name}`
        );
        resolve(publicUrl);
      });

      blobStream.end(file.buffer);
    });
  },
};
