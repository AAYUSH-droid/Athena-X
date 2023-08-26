"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const types_1 = require("types");
const quizSchema = new mongoose_1.Schema({
    admin: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: types_1.ModelNames.User,
        required: true,
    },
    managers: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: types_1.ModelNames.User,
        },
    ],
    participants: [
        {
            user: {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: types_1.ModelNames.User,
            },
            submitted: {
                type: Boolean,
                default: false,
            },
        },
    ],
    isPublished: {
        type: Boolean,
        required: true,
        default: false,
    },
    isAcceptingAnswers: {
        type: Boolean,
        required: true,
        default: false,
    },
    resultsPublished: {
        type: Boolean,
        required: true,
        default: false,
    },
    quizMetadata: {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        instructions: {
            type: String,
            required: true,
        },
        startDateTimestamp: {
            type: Date,
            required: true,
        },
        endDateTimestamp: {
            type: Date,
            required: true,
        },
        accessCode: {
            type: String,
        },
        bannerImage: {
            type: String,
            required: false,
        },
    },
    registrationMetadata: {
        customFields: [
            {
                name: {
                    type: String,
                    required: true,
                },
                label: {
                    type: String,
                    required: true,
                },
                isRequired: {
                    type: Boolean,
                    required: true,
                },
            },
        ],
    },
    sections: [
        {
            name: {
                type: String,
                required: true,
            },
            description: {
                type: String,
            },
            questions: [{ type: mongoose_1.Schema.Types.ObjectId, ref: types_1.ModelNames.Question }],
        },
    ],
});
exports.default = quizSchema;
