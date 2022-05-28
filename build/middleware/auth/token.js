"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (req, res, next) => {
    const token = req.headers.token;
    console.log(token);
    next();
    return;
};
