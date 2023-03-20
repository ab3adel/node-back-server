"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOneProduct = exports.getProducts = void 0;
const products_service_1 = require("../services/products.service");
const products_model_1 = __importDefault(require("../models/products.model"));
let student = new products_service_1.Students({ model: (0, products_model_1.default)() });
async function getProducts(req, res) {
    let { page, page_count, locale } = req.query;
    if (!locale) {
        res.send(400).json({ success: false, message: "you must send locale " });
    }
    let records = await student.getAllProducts({ page, limit: page_count, locale: locale ? locale : 'en' });
    if (records) {
        res.status(200).json({ success: true, data: records });
    }
    else {
        res.status(400).json({ success: false, message: 'page number is required' });
    }
}
exports.getProducts = getProducts;
async function createOneProduct(req, res) {
    let obj = req.body;
    if (obj) {
        let result = await student.createOne(obj);
        res.json({ data: result });
    }
    else {
        res.status(400).json({ success: false });
    }
}
exports.createOneProduct = createOneProduct;
