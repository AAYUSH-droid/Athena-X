"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteQuestion = exports.updateQuestion = exports.getQuestions = exports.createQuestion = void 0;
var createQuestion_1 = require("./createQuestion");
Object.defineProperty(exports, "createQuestion", { enumerable: true, get: function () { return __importDefault(createQuestion_1).default; } });
var getQuestion_1 = require("./getQuestion");
Object.defineProperty(exports, "getQuestions", { enumerable: true, get: function () { return __importDefault(getQuestion_1).default; } });
var updateQuestion_1 = require("./updateQuestion");
Object.defineProperty(exports, "updateQuestion", { enumerable: true, get: function () { return __importDefault(updateQuestion_1).default; } });
var deleteQuestion_1 = require("./deleteQuestion");
Object.defineProperty(exports, "deleteQuestion", { enumerable: true, get: function () { return __importDefault(deleteQuestion_1).default; } });
