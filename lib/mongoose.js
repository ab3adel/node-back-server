"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MONGODB_URL = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const logger_1 = __importDefault(require("./logger"));
//etMEmPCgLqQovT8j
exports.MONGODB_URL = `mongodb+srv://new_user:4iYQeaygCupdbcVr@cluster0.31pbuck.mongodb.net/`;
const test = 'mongodb://127.0.0.1:27017';
async function default_1() {
    console.log('start connecting');
    await mongoose_1.default.connect(exports.MONGODB_URL)
        .catch(err => {
        logger_1.default.error('err', err);
        process.exit(1);
    });
}
exports.default = default_1;
