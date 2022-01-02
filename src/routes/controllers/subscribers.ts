import {Request, Response} from "express";

import {APIResponse} from "types";


interface RegisterSubscriberParams { email: string }

const registerSubscriber = async (req: Request<RegisterSubscriberParams>, res: Response<APIResponse>) => {
  const { email } = req.params;

  return res.send({
    data: email,
    error: null
  });
};


export default {
  registerSubscriber,
};
