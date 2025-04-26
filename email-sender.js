const nodemailer = require('nodemailer');

// Créer un transporteur SMTP
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'votre_email@gmail.com',
        pass: 'votre_mot_de_passe_app' 
    }
});

// Options de l'email
const mailOptions = {
    from: 'votre_email@gmail.com',
    to: 'namory.timite@uvci.edu.ci',
    subject: 'Test d\'envoi d\'email depuis Node.js',
    text: 'Ceci est un test d\'envoi d\'email depuis Node.js!'
};

// Envoyer l'email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Erreur:', error);
    } else {
        console.log('Email envoyé:', info.response);
    }
}); 