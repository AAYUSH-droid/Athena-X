"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const types_1 = require("types");
const questionSchema_1 = __importDefault(require("./questionSchema"));
const QuestionModel = mongoose_1.default.model(types_1.ModelNames.Question, questionSchema_1.default);
exports.default = QuestionModel;
