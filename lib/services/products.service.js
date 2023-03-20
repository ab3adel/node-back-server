"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Students = void 0;
class Students {
    constructor(options) {
        this.model = undefined;
        this.model = options.model;
    }
    async getAllProducts(params) {
        if (params.page) {
            try {
                let locale = params.locale;
                let records = await this.model.find({}, {
                    product_name: 1,
                    price: 1,
                    filename: 1,
                    quantity: 1
                }, { skip: parseInt(params.page), limit: 10 });
                return {
                    success: true,
                    data: {
                        current_page: params.page,
                        page_counts: params.limit,
                        data: records,
                    },
                };
            }
            catch (err) {
                return { success: false, data: err };
            }
        }
        return null;
    }
    async createOne(data) {
        let record = new this.model(data);
        try {
            let res = await record.save();
            return { success: true, data: res };
        }
        catch (err) {
            return { success: false, data: err };
        }
    }
}
exports.Students = Students;
