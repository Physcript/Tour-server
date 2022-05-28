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
exports.create_login_token = exports.create_encrypt = exports.create_uid = exports.get_login_role = exports.check_login_email = exports.check_dupplicate_email = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = __importDefault(require("../../config"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = __importDefault(require("../../model/User"));
const Management_1 = __importDefault(require("../../model/Management"));
const check_dupplicate_email = (email) => __awaiter(void 0, void 0, void 0, function* () {
    if (yield User_1.default.findOne({ email })) {
        return true;
    }
    return false;
});
exports.check_dupplicate_email = check_dupplicate_email;
const check_login_email = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.default.findOne({ email });
    if (user !== null) {
        return user;
    }
    return null;
});
exports.check_login_email = check_login_email;
const get_login_role = (uid) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const role = yield Management_1.default.findOne({ uid });
    return (_a = role.role) !== null && _a !== void 0 ? _a : 0;
});
exports.get_login_role = get_login_role;
const create_uid = () => __awaiter(void 0, void 0, void 0, function* () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
});
exports.create_uid = create_uid;
const create_encrypt = (password) => __awaiter(void 0, void 0, void 0, function* () {
    return yield bcrypt_1.default.hash(password, 8);
});
exports.create_encrypt = create_encrypt;
const create_login_token = (user) => __awaiter(void 0, void 0, void 0, function* () {
    return yield jsonwebtoken_1.default.sign(user, `${config_1.default.PASSWORD.TOKEN}`);
});
exports.create_login_token = create_login_token;
