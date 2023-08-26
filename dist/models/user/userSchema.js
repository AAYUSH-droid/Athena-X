"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const types_1 = require("types");
const userSchema = new mongoose_1.Schema({
    personalDetails: {
        name: {
            type: String,
            required: true,
        },
        emailAdd: {
            type: String,
            required: true,
        },
        phoneNo: {
            type: String,
            required: false,
        },
    },
    educationalDetails: {
        instituteName: {
            type: String,
            required: false,
        },
        city: {
            type: String,
            required: false,
        },
        country: {
            type: String,
            required: false,
        },
    },
    socialHandles: [
        {
            type: {
                type: String,
                required: false,
                enum: Object.values(types_1.SocialHandleTypes),
            },
            handle: {
                type: String,
                required: false,
            },
        },
    ],
    onboardingComplete: {
        type: Boolean,
        required: true,
        default: false,
    },
    oauthProvider: {
        type: String,
        required: true,
        enum: Object.values(types_1.OAuthProviders),
    },
    token: {
        type: String,
    },
    csrfToken: {
        type: String,
    },
    role: {
        type: String,
        required: true,
        enum: Object.values(types_1.UserRoles),
        default: types_1.UserRoles.user,
    },
});
exports.default = userSchema;
