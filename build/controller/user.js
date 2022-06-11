"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    create: ((req, res) => {
        var _a;
        res.status(200).json({
            message: {
                postId: (_a = res.locals.postId) !== null && _a !== void 0 ? _a : ''
            }
        });
        res.locals.postId = '';
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
