const nodemailer = require('nodemailer');

module.exports = (datos) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail', // servicio a usar
    auth: {
      user: 'alex.flores6651@gmail.com', // correo de aplicacion
      pass: 'hwobjcbasxtcrwad' // contraseña de aplicacion
    }
  });

  const mailOptions = {
    from: `"Donburi Dojo Account"`,
    to: `"${datos.email}"`, // Destinatario. -> Tomado de Angular
    subject: `"Reservacion Realizada"`,
    html: `
    <p>Se ha realizado una reservación a su cuenta: </p> <br/>
    <strong> Nombre: </strong> ${datos.nombre} <br/>
    <strong> Correo: </strong> ${datos.email}  <br/>
    <strong> Dia de Reservacion: </strong> ${datos.diaNum} <br/>
    <strong> Hora de Reservacion: </strong> ${datos.hora} <br/>
    <strong> No. de Personas: </strong> ${datos.visitantes} <br/>
    `
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {  console.log(err); } 
    else { console.log(info); }
  });
}
