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
const bcrypt_1 = __importDefault(require("bcrypt"));
const main_1 = require("./main");
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield (0, main_1.check_login_email)(email);
    if (user === null) {
        res.status(400).json({
            error: 'Invalid email/password'
        });
        return;
    }
    const isMatch = yield check_login_password(password, user.password);
    if (!isMatch) {
        res.status(400).json({
            error: 'Invalid email/password'
        });
        return;
    }
    //login 
    const role = yield (0, main_1.get_login_role)(user.uid);
    const _user = yield {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        uid: user.uid,
        token: '',
        role,
    };
    const token = yield (0, main_1.create_login_token)(_user);
    res.locals.user = _user;
    res.locals.token = token;
    // saving token
    user.token = token;
    yield user.save();
    next();
    return;
});
const check_login_password = (password, _password) => __awaiter(void 0, void 0, void 0, function* () {
    return yield bcrypt_1.default.compare(password, _password);
});
exports.default = login;
