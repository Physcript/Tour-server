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
const view_1 = __importDefault(require("../middleware/post/view"));
const upload_1 = __importDefault(require("../middleware/upload/upload"));
const multer_1 = __importDefault(require("multer"));
const router = express_1.default.Router();
//
// authMiddleware checking token to save user in res.locals.user
// validateMiddleware uid email from req.body check in res.locals.user
//
//
const upload = (0, multer_1.default)();
router.post('/create', auth_1.default, main_1.default, create_1.default, post_1.default.create);
router.post('/upload', upload.array('img'), upload_1.default, post_1.default.upload);
router.post('/view', view_1.default, post_1.default.view);
exports.default = router;
