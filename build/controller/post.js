"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    create: ((req, res) => {
        res.status(200).json({
            message: 'post created'
        });
        return;
    }),
    view: ((req, res) => {
        res.status(200).json({
            message: {
                post: res.locals.post
            }
        });
        res.locals.post = undefined;
        return;
    })
};
