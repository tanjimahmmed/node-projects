const nodemailer = require('nodemailer');


const sendEmail = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'lisandro.dickinson@ethereal.email',
            pass: 'kXPFJR9KBDP2pRuenu'
        }
    });

    let info = await transporter.sendMail({
        from: '"Development" <tanjimahmmed.8@gmail.com>',
        to: 'bar@example.com',
        subject: 'Hello',
        html: '<h2>Sending Email with node js</h2>'
    })
    
    res.json(info)
}

module.exports = sendEmail;