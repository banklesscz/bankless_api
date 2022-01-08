import {Request, Response} from "express";
import mailchimp from "@mailchimp/mailchimp_marketing";

import {APIResponse} from "types";


mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER
});


interface RegisterSubscriberBody { email: string }

const registerSubscriber = async (req: Request<null, null, RegisterSubscriberBody>, res: Response<APIResponse>) => {
  const { email } = req.body;

  try {
    await mailchimp.lists.setListMember(
      process.env.MAILCHIMP_LIST_ID || '',
      email,
      {
        email_address: email,
        // @ts-ignore
        status: "subscribed"
      }
    );

    return res.send({
      data: 'Úspěšně jste se přihlásili k newsletteru.',
      error: null
    });
  } catch (e) {
    console.log(e.response.body);

    return res.status(400).send({
      data: null,
      error: 'Nepodařilo se přihlásit k newsletteru.'
    });
  }
};


export default {
  registerSubscriber,
};
