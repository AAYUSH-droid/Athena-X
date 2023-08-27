"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendInvalidInputResponse = (res) => {
    res.status(400).json({ error: "Invalid input" });
};
exports.default = sendInvalidInputResponse;
