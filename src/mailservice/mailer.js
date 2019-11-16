const nodemailer = require('nodemailer');

export default async function sendEmail(user) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'leon.luisgerardo775@gmail.com',
      pass: '1298Luis.',
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'leon.luisgerardo775@gmail.com', // sender address
    to: user.email, // list of receivers
    subject: 'ONFIX: Verificacion de cuenta ✔', // Subject line
    html: `<div style="text-align: center; font-family: arial; margin-left: 10%; margin-rigth:10%;"> <p style="font-size: 30px;">Bienvenido ${user.nombre} a <span style="color: #fc8e3d;">ONFIX</span>!</p> <pstyle="font-size: 20px; background: #eeeeee; border-radius: 5px;"> tu codigo de verificacion es: ${user.cod_verificacion} </p> <p> Este es un correo autogenerado asi que no tienes que responderlo. </p> <a href="https://www.copernica.com" target="_blank" style="background-color: #fc8e3d; border: none;border-radius: 10px;color: white; padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer;">Click aqui para verificar tu cuenta</a> </div>`, // html body
  });

  console.log('Message sent: %s', info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
