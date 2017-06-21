const nodemailer = require('nodemailer');
const express = require('express');
const router = express.Router();

router.route('/contact').get((req, res) => {
    res.send('contact route works');
});

router.route('/contact').post((req, res) => {
    if(req.body.company) {
        res.redirect('http://localhost:4200/robot');
    } else {

        const smtpTrans = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'ryanemmons.net@gmail.com',
                pass: '3UZ-DpZ-4n9-fy9'
            }
        });
        let mailOpts = {
            from: req.body.name + ' &lt;' + req.body.email + '&gt;',
            to: 'ryanemmons.net@gmail.com',
            subject: 'A Message From ryanemmons.net',
            text: req.body.message + ' || Name: ' + req.body.name + ' || EMAIL: ' + req.body.email + ' || Phone: ' + req.body.phone
        };

        smtpTrans.sendMail(mailOpts, (err, info) => {
            if (error) {
                console.log(error);
            }
        });
        res.redirect('http://localhost:4200/thankyou');
    }
});

module.exports = router;