"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
const loggerConfig = {
    sillyFile: process.env.VERBOSE_LOG_PATH || "logs/silly.log",
    errorFile: process.env.ERROR_LOG_PATH || "logs/error.log",
    warnFile: process.env.WARN_LOG_PATH || "logs/warn.log",
    debugFile: process.env.DEBUG_LOG_LEVEL || "logs/debug.log",
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createTransports = (config) => {
    const customTransports = [
        new winston_1.default.transports.File({
            filename: config.sillyFile,
            level: "silly",
        }),
        new winston_1.default.transports.File({
            filename: config.errorFile,
            level: "error",
        }),
        new winston_1.default.transports.File({
            filename: config.warnFile,
            level: "warn",
        }),
        new winston_1.default.transports.File({
            filename: config.debugFile,
            level: "debug",
        }),
    ];
    return customTransports;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const create = (config) => winston_1.default.createLogger({
    transports: createTransports(config),
    format: winston_1.default.format.combine(winston_1.default.format.timestamp({
        format: "YYYY-MM-DD HH:mm:ss",
    }), winston_1.default.format.label({
        label: "Quizio Backend",
    }), winston_1.default.format.printf((info) => `${info.label} (${info.timestamp}) [${info.level}] : ${info.message}`)),
});
const logger = create(loggerConfig);
exports.default = logger;
