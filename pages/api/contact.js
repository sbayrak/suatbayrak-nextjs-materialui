import sgMail from '@sendgrid/mail';

export default async (req, res) => {
  sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);
  const msg = {
    to: 'suat.bayrak@bilgiedu.net', // Change to your recipient
    from: req.body.email, // Change to your verified sender
    subject: `Website Contact - ${req.body.name}`,
    text: req.body.message,
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
