import { Router } from "express";

import SubscribersController from "./controllers/subscribers";

const router = Router();

// Subscribers Routes
router.post('/subscribers/register', SubscribersController.registerSubscriber);


export default router;
