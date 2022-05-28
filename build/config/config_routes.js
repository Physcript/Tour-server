"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../routes/user"));
const post_1 = __importDefault(require("../routes/post"));
module.exports = (app) => {
    app.use('/api/u', user_1.default);
    app.use('/api/p', post_1.default);
    app.use((req, res) => {
        res.status(404).json({
            message: 'Not Found'
        });
    });
    return;
};
