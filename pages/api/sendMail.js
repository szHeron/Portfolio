const nodemailer = require('nodemailer');

export default function sendMail(req,res){
    const transporter = nodemailer.createTransport({
        host: "in-v3.mailjet.com",
        port: 587,
        auth: {
            user: process.env.USERMAIL,
            pass: process.env.PASSMAIL
        }
    });

    try{
        transporter.sendMail({
            from: `<contatoheron.dev@outlook.com>`,
            to: "contatoheron.dev@outlook.com, Mailer <contatoheron.dev@outlook.com>",
            subject: `${req.body.email} mandou um feedback pelo site portfolio`,
            text: `${req.body.message}`
        })
        res.status(200).end();
    }catch(err){
        console.log(err);
        res.status(500).end();
    }
}