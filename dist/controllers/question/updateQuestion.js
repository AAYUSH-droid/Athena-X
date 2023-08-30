"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const invalidInputResponse_1 = __importDefault(require("@utils/invalidInputResponse"));
const questionModel_1 = __importDefault(require("@models/question/questionModel"));
const failureResponse_1 = __importDefault(require("@utils/failureResponse"));
const updateQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body) {
        return (0, invalidInputResponse_1.default)(res);
    }
    // get data from request body
    const { question, questionId } = req.body;
    try {
        // find question and update
        const updatedQuestion = yield questionModel_1.default.findOneAndUpdate({ _id: questionId }, question, { new: true });
        // send response
        if (!updatedQuestion) {
            return (0, failureResponse_1.default)({
                res,
                error: "Question not found",
                messageToSend: "Question not found",
                errorCode: 400,
            });
        }
        else {
            return res.status(200).json({
                message: "Question updated",
            });
        }
    }
    catch (error) {
        (0, failureResponse_1.default)({
            res,
            error,
            messageToSend: "Failed to update question",
        });
    }
});
exports.default = updateQuestion;
