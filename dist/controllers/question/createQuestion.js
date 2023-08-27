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
const invalidInputResponse_1 = __importDefault(require("../../utils/invalidInputResponse"));
const questionModel_1 = __importDefault(require("../../models/question/questionModel"));
const quizModel_1 = __importDefault(require("@models/quiz/quizModel"));
const failureResponse_1 = __importDefault(require("../../utils/failureResponse"));
const createQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body.question || !(req.body.sectionIndex !== undefined)) {
        return (0, invalidInputResponse_1.default)(res);
    }
    // get data from request body
    const { question, sectionIndex } = req.body;
    const { quizId } = req.params;
    try {
        // create new question
        const newQuestion = new questionModel_1.default(question);
        const newQuestionDoc = yield newQuestion.save();
        // add question to section
        const updateSection = yield quizModel_1.default.findByIdAndUpdate(quizId, {
            $push: {
                [`sections.${sectionIndex}.questions`]: newQuestionDoc._id,
            },
        });
        // send response
        if (!updateSection) {
            return (0, failureResponse_1.default)({
                res,
                error: "Failed to create question",
                messageToSend: "Failed to create question",
            });
        }
        else {
            return res.status(201).json({
                questionid: newQuestionDoc._id,
                message: "Question created",
            });
        }
    }
    catch (error) {
        (0, failureResponse_1.default)({
            res,
            error,
            messageToSend: "Failed to create question",
        });
    }
});
exports.default = createQuestion;
