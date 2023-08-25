"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const connectDB_1 = require("./db/connectDB");
const app = (0, express_1.default)();
dotenv_1.default.config();
(0, connectDB_1.connectDB)();
const port = process.env.PORT;
app.get("/", (req, res) => {
    res.send("Hello, this is Express + TypeScript");
});
app.listen(port, () => {
    console.log(`[Server]: I am running at http://localhost:${port}`);
});
