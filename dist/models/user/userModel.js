"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const types_1 = require("types");
const userSchema_1 = __importDefault(require("./userSchema"));
const userModel = mongoose_1.default.model(types_1.ModelNames.User, userSchema_1.default);
exports.default = userModel;
