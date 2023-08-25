import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB";

const app: Express = express();
dotenv.config();

connectDB();
const port = process.env.PORT;
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, this is Express + TypeScript");
});

app.listen(port, () => {
  console.log(`[Server]: I am running at http://localhost:${port}`);
});
