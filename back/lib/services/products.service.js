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
                let fields = locale && locale === 'en' ?
                    { lastName_en: 1, firstName_en: 1, address_en: 1 } :
                    { lastName_ar: 1, firstName_ar: 1, address_ar: 1 };
                let records = await this.model.find({ creationDate: { $lte: Date.now() } }, {
                    ...fields,
                    phoneNumber: 1,
                    CountryCode: 1,
                    id: 1,
                    dateOfBirth: 1,
                    creationDate: 1,
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
