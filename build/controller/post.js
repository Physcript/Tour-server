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
    }),
    upload: ((req, res) => {
        res.status(200).json({
            message: {
                upload: {
                    url: res.locals.url,
                    public_id: res.locals.public_id
                }
            }
        });
        res.locals.url = undefined;
        res.locals.public_id = undefined;
        return;
    })
};
