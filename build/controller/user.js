"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    create: ((req, res) => {
        res.status(200).json({
            message: 'user created'
        });
        return;
    }),
    login: ((req, res) => {
        res.status(200).json({
            message: {
                user: res.locals.user,
                token: res.locals.token
            }
        });
        res.locals.user = undefined;
        res.locals.token = undefined;
        return;
    })
};
