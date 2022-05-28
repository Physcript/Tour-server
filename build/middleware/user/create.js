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
const validator_1 = __importDefault(require("validator"));
const User_1 = __importDefault(require("../../model/User"));
const main_1 = require("./main");
const Management_1 = __importDefault(require("../../model/Management"));
const create = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, email, password, confirmPassword } = req.body;
    const err_01 = yield check_valid_input(req);
    const err_02 = yield check_valid_email(email);
    const err_03 = yield check_valid_password(password, confirmPassword);
    const err = Object.assign(Object.assign(Object.assign({}, err_01), err_02), err_03);
    if (Object.keys(err).length >= 1) {
        res.status(400).json({
            error: err
        });
        return;
    }
    const uid = yield (0, main_1.create_uid)();
    const enc = yield (0, main_1.create_encrypt)(password);
    const user = new User_1.default({
        firstName,
        lastName,
        email,
        password: enc,
        uid,
    });
    const management = new Management_1.default({
        uid,
        role: 0
    });
    yield user.save();
    yield management.save();
    next();
    return;
});
const check_valid_input = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const err = {};
    const { firstName, lastName, email, password, confirmPassword } = req.body;
    const validate = {
        Firstname: firstName,
        Lastname: lastName,
        Email: email,
        Password: password,
        ConfirmPassword: confirmPassword
    };
    Object.entries(validate).forEach(([key, value]) => {
        if (value.trim() === '') {
            err[key] = `Require ${key}`;
        }
    });
    return err;
});
const check_valid_email = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const err = {};
    email = email.toLowerCase().trim();
    if (yield (0, main_1.check_dupplicate_email)(email)) {
        err['Email'] = 'Email already exist';
    }
    else {
        if (validator_1.default.isEmail(email)) {
        }
        else {
            err['Email'] = 'Email invalid';
        }
    }
    return err;
});
const check_valid_password = (password, confirmPassword) => {
    const err = {};
    if (password !== confirmPassword) {
        err['Password'] = 'Password not match';
    }
    if (password.includes(' ')) {
        err['Password'] = 'Invalid password';
    }
    if (password.length <= 7 || confirmPassword.length <= 7) {
        err['Password'] = `Minimum of 8 password characters`;
    }
    return err;
};
exports.default = create;
