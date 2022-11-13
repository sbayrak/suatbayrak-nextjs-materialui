import sgMail from '@sendgrid/mail';

export default async (req, res) => {
  sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY2);

  const { name, email, message } = req.body;

  let userForm = {
    name: name,
    email: email,
    message: message,
  };
  const msg = {
    to: 'oneheal.gmbh1@gmail.com', // Change to your recipient
    from: 'oneheal.gmbh1@gmail.com', // Change to your verified sender
    subject: `OneHeal GmbH Website Contact - ${req.body.name}`,
    text: JSON.stringify(userForm),
    html: `<h3>Name : ${name} <br/> E-Mail : ${email} <br/> Message : ${message} </h3> <br/> <h1>This e-mail has been sent from oneheal.netlify.com contact form. <br/> </h1> `,
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
