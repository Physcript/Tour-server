"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (req, res, next) => {
    const { uid, email } = req.body;
    const user = res.locals.user;
    if (uid === user.uid && email === user.email) {
        next();
        return;
    }
    else {
        res.status(401).json({
            error: 'Unauthorized'
        });
        return;
    }
};
