"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const types_1 = require("types");
const responseSchema_1 = __importDefault(require("./responseSchema"));
const ResponseModel = mongoose_1.default.model(types_1.ModelNames.Response, responseSchema_1.default);
exports.default = ResponseModel;
