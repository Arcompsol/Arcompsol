// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { SMTPClient } from 'emailjs';




export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const {email, subject, body}=req.body;
  
  
  const client = new SMTPClient({
    user:  process.env.NEXT_APP_EMAIL,
    password: process.env.NEXT_APP_PASSWORD,
    host: 'smtp.gmail.com',
    ssl:true
  });
  
  try {
   const res1 = await client.sendAsync({
      text: body,
      from:  process.env.NEXT_APP_EMAIL || '',
      to: [ process.env.NEXT_APP_EMAIL,email],
      subject: subject,
    });

    

    res.status(200).json({ message: res1});
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
}
