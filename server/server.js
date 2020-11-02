require('dotenv').config();
import express from "express";
import bodyParser from "body-parser";
import apis from "./api"

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use("/api", apis);

app.listen(port, () => console.log("Listening on port ${port}"));