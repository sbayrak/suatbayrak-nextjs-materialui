import sgMail from '@sendgrid/mail';

export default async (req, res) => {
  sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

  const { name, email, message } = req.body;

  let userForm = {
    name: name,
    email: email,
    message: message,
  };
  const msg = {
    to: 'suat.bayrak@bilgiedu.net', // Change to your recipient
    from: 'suat.bayrak@bilgiedu.net', // Change to your verified sender
    subject: `suatbayrak.com Website Contact - ${req.body.name}`,
    text: JSON.stringify(userForm),
    html: `<h3>Name : ${name} <br/> E-Mail : ${email} <br/> Message : ${message} </h3> <br/> <h1>This e-mail has been sent from suatbayrak.com contact form. <br/> </h1> `,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent');
      res.status(201).json({ success: true });
    })
    .catch((error) => {
      console.error(error);
      res.status(401).json({ success: false });
    });
};
