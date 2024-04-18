import { iOption, iParams, iProduct } from "../declarations";

export class Students {
  model: any = undefined;
  constructor(options: iOption) {
    this.model = options.model;
  }
  async getAllProducts(params: iParams) {
   
    if (params.page) {
      try {
        let locale = params.locale;


        let records = await this.model.find(
          { },
          {},
          { skip: 10 * (params.page -1), limit: 10}
        );

        return {
          success: true,
          data: {
            current_page: params.page,
            page_counts: params.limit,
            data: records,
          },
        };
      } catch (err) {
        return { success: false, data: err };
      }
    }
    return null;
  }

  async createOne(data: iProduct) {
    let record = new this.model(data);
    try {
      let res = await record.save();
      return { success: true, data: res };
    } catch (err) {
      return { success: false, data: err };
    }
  }

}
