"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("../controller/user"));
const create_1 = __importDefault(require("../middleware/user/create"));
const login_1 = __importDefault(require("../middleware/user/login"));
const router = express_1.default.Router();
router.post('/create', create_1.default, user_1.default.create);
router.post('/login', login_1.default, user_1.default.login);
exports.default = router;
