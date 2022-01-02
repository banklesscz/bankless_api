import cors from "cors";
import express from "express";
import bodyParser from "body-parser";

require('dotenv').config();
import router from "./routes";


const PORT = process.env.PORT || 8000;
const app = express();

// CORS Setting
app.use(cors());

// BodyParser Setting
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', router);
app.listen(PORT, () => console.log(`Server is running on port ${PORT} ...`));
