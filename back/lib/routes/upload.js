"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploader = void 0;
const upload_1 = __importDefault(require("../middleware/upload"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post("/upload", upload_1.default.single("file"), async (req, res) => {
    if (req.file === undefined)
        return res.send("you must select a file.");
    const imgUrl = `http://localhost:8080/file/${req.file.filename}`;
    return res.send(imgUrl);
});
exports.uploader = router;
