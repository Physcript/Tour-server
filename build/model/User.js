"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userScehma = new mongoose_1.default.Schema({
    firstName: {
        type: String,
        lowercase: true,
        trim: true
    },
    lastName: {
        type: String,
        lowercase: true,
        trim: true
    },
    email: {
        type: String,
        lowercase: true,
        trim: true
    },
    password: String,
    uid: String,
    token: String
}, { timestamps: true });
const User = mongoose_1.default.model('User', userScehma);
exports.default = User;
