import crypto from "crypto";
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

  const md5Hasher = crypto.createHmac('md5', '');
  const emailHash = md5Hasher.update(email.toLowerCase()).digest('hex');

  try {
    const mRes = await mailchimp.lists.setListMember(
      process.env.MAILCHIMP_LIST_ID || '',
      emailHash,
      {
        email_address: email,
        // @ts-ignore
        status: "subscribed"
      }
    );

    console.log(mRes);

    return res.send({
      data: email,
      error: null
    });
  } catch (e) {
    console.log(e.response.body);

    return res.status(400).send({
      data: null,
      error: 'Nepodařilo se přihlásit k newsletteru'
    });
  }
};


export default {
  registerSubscriber,
};
