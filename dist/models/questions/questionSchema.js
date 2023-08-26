"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const types_1 = require("types");
const questionSchema = new mongoose_1.Schema({
    type: {
        type: String,
        required: true,
        enum: Object.values(types_1.QuestionTypes),
        default: types_1.QuestionTypes.MCQ,
    },
    description: {
        type: String,
        required: true,
    },
    options: [
        {
            id: {
                type: String,
                required: true,
            },
            label: {
                type: String,
                required: true,
            },
        },
    ],
    correctAnswer: {
        type: String,
    },
    maxMarks: {
        type: Number,
        required: true,
    },
    notes: {
        type: String,
    },
    autoCheck: {
        type: Boolean,
        required: true,
        default: true,
    },
    totalAttempts: {
        type: Number,
        default: 0,
    },
    checkedAttempts: {
        type: Number,
        default: 0,
    },
    assignedTo: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: types_1.ModelNames.User,
        },
    ],
});
exports.default = questionSchema;
