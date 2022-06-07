"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const postSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        lowercase: true,
    },
    body: {
        type: String
    },
    img: {
        type: [String]
    },
    img_id: {
        type: [String]
    },
    status: {
        type: Boolean
    },
    uid: {
        type: String,
        ref: 'User'
    },
    tag: {
        type: [String],
        lowecase: true
    }
}, { timestamps: true });
const Post = mongoose_1.default.model('Post', postSchema);
exports.default = Post;
