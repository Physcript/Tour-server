"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create = (req, res, next) => {
    console.log('creating');
    next();
    return;
};
exports.default = create;
