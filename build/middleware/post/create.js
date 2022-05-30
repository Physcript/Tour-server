"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Post_1 = __importDefault(require("../../model/Post"));
const create = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, body, img, tag } = req.body;
    const { uid } = res.locals.user;
    const error_01 = check_user_input(title, body, img, tag);
    if (Object.keys(error_01).length >= 1) {
        res.status(400).json({
            error: error_01
        });
        return;
    }
    const post = new Post_1.default({
        title,
        body,
        uid,
        img,
        tag,
        status: false
    });
    yield post.save();
    next();
    return;
});
const check_user_input = (title, body, img, tag) => {
    const err = {};
    const validate = {
        Title: title,
        Body: body,
        Image: img,
        Tag: tag
    };
    Object.entries(validate).forEach(([key, value]) => {
        if (typeof (value) === 'string') {
            if (value.trim() === '') {
                err[key] = `Require ${key}`;
            }
        }
        else {
            if (value.length >= 1) {
                value.forEach((el) => {
                    if (el.trim() === '') {
                        err[key] = `Require ${key}`;
                    }
                });
            }
            else {
                err[key] = `Require ${key}`;
            }
        }
    });
    return err;
};
exports.default = create;
