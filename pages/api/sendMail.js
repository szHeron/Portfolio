const nodemailer = require('nodemailer');

export default function sendMail(req,res){
    const transporter = nodemailer.createTransport({
        host: 'in-v3.mailjet.com',
        port: 587,
        auth: {
            user: process.env.USERMAIL,
            pass: process.env.PASSMAIL
        }
    });

    function isJson() {
        if(!req.body.email)
            return false;
        return true;
    }

    try{
        const data = isJson()?req.body.email:JSON.parse(req.body);
        const email = data.email;
        const message = data.message;

        transporter.sendMail({
            from: `<contatoheron.dev@outlook.com>`,
            to: 'contatoheron.dev@gmail.com, Mailer <contatoheron.dev@gmail.com>',
            subject: `${email} mandou um feedback pelo site portfolio`,
            text: `${message}`
        });

        res.json({sucess: true});
        res.status(200).end();
    }catch(err){
        console.log(err);
        res.json({sucess: false, err: err});
        res.status(500).end();
    }
}
