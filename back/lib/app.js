"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("./mongoose"));
const mongoose_2 = __importDefault(require("mongoose"));
const authentication_1 = require("./routes/authentication");
const products_1 = require("./routes/products");
const express_1 = __importDefault(require("express"));
// Don't remove this comment. It's needed to format import lines nicely.
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
//app.use(body_parser.json())
(0, mongoose_1.default)();
const conn = mongoose_2.default.connection;
//app.use(cors());
//app.use(compress());
// Host the public folder
// Set up Plugins and providers
// Configure other middleware (see `middleware/index.ts`)
// Configure a middleware for 404s and the error handler
//app.use("/file", uploader);
app.get('/getUser', authentication_1.getUser);
//app.configure(Authenticate);
app.post('/login', authentication_1.signIn);
app.get('/logout', authentication_1.logout);
app.post('/signup', authentication_1.signUp);
app.post('/resetpassword', authentication_1.resetPassword);
app.get('/products', products_1.getProducts);
app.post('/createProduct', products_1.createOneProduct);
app.use(express_1.default.static(__dirname + '/public'));
exports.default = app;
