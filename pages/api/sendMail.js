const nodemailer = require('nodemailer');

export default function sendMail(req,res){
    const transporter = nodemailer.createTransport({
        host: "in-v3.mailjet.com",
        port: 587,
        secure : false,
        auth: {
            user: process.env.USERMAIL,
            pass: process.env.PASSMAIL
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    try{
        transporter.sendMail({
            from: `<contatoheron.dev@outlook.com>`,
            to: "contatoheron.dev@gmail.com, Mailer <contatoheron.dev@gmail.com>",
            subject: `${req.body.email} mandou um feedback pelo site portfolio`,
            text: `${req.body.message}`
        })
        res.json({sucess: true})
        res.status(200).end();
    }catch(err){
        console.log(err);
        res.json({sucess: false, err: err})
        res.status(500).end();
    }
}
