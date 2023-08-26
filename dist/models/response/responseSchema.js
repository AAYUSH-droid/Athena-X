"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const types_1 = require("types");
const responseSchema = new mongoose_1.Schema({
    questionId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: types_1.ModelNames.Question,
        required: true,
    },
    quizId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: types_1.ModelNames.Quiz,
        required: true,
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: types_1.ModelNames.User,
        required: true,
    },
    selectedOptionId: {
        type: String,
    },
    subjectiveAnswer: {
        type: String,
    },
    marksAwarded: {
        type: Number,
    },
    status: {
        type: String,
        enum: Object.values(types_1.ResponseStatus),
    },
    checkedBy: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: types_1.ModelNames.User,
    },
});
exports.default = responseSchema;
