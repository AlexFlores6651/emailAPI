const nodemailer = require('nodemailer');

module.exports = (formulario) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail', // servicio a usar
    auth: {
      user: 'alex.flores6651@gmail.com', // correo de aplicacion
      pass: 'hwobjcbasxtcrwad' // contraseña de aplicacion
    }
  });

  const mailOptions = {
    from: `"${formulario.nombre} " <${formulario.email}>`,
    to: `"therocagames1234@gmail.com"`, // Destinatario. -> Tomado de Angular
    subject: formulario.asunto,
    html: `
    <p>Se ha enviado un mensaje por parte de un cliente con la siguiente informacion: </p> <br/>
    <strong> Nombre: </strong> ${formulario.nombre} <br/>
    <strong> Correo: </strong> ${formulario.email}  <br/>
    <strong> Informacion: </strong> ${formulario.mensaje}
    `
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {  console.log(err); } 
    else { console.log(info); }
  });
}
