import { Router } from "express";

import SubscribersController from "./controllers/subscribers";

const router = Router();

// Users Routes
router.get('/register/:email', SubscribersController.registerSubscriber);


export default router;
