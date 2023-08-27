"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendFailureResponse = ({ res, error, messageToSend, errorCode = 500, }) => {
    console.log(`🔴 ${messageToSend}: ${error}`);
    res.status(errorCode).json({
        error: messageToSend,
    });
};
exports.default = sendFailureResponse;
