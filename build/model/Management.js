"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const managementSchema = new mongoose_1.default.Schema({
    uid: {
        type: String,
        ref: 'User'
    },
    role: Number
});
const Management = mongoose_1.default.model('Management', managementSchema);
exports.default = Management;
