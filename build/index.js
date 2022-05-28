"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const config_1 = __importDefault(require("./config"));
const http_1 = require("http");
// const
const app = (0, express_1.default)();
const httpServer = (0, http_1.createServer)(app);
const corsOption = { origin: 'http://localhost:3000', credential: true };
// use
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)(corsOption));
app.use((0, cookie_parser_1.default)());
// cors
require('./config/config_cors')(app);
// middleware
require('./config/config_middleware')(app);
// io
require('./config/config_io')(httpServer);
// routes
require('./config/config_routes')(app);
// initialize
mongoose_1.default
    .connect(`${config_1.default.DATABASE.URL}`, config_1.default.DATABASE.OPTIONS)
    .then(() => console.log(`DATABASE CONNECTED`))
    .catch((err) => console.log(`${err} network error`));
httpServer.listen(config_1.default.SERVER.PORT, () => {
    console.log(`PORT: ${config_1.default.SERVER.PORT}`);
});
