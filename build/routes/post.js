"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const post_1 = __importDefault(require("../controller/post"));
const create_1 = __importDefault(require("../middleware/post/create"));
const auth_1 = __importDefault(require("../middleware/auth"));
const main_1 = __importDefault(require("../middleware/auth/main"));
const router = express_1.default.Router();
router.post('/create', auth_1.default, main_1.default, create_1.default, post_1.default.create);
exports.default = router;
