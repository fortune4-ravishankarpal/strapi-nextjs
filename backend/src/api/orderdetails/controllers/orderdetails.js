'use strict';

/**
 * A set of functions called "actions" for `orderdetails`
 */
let { entityService } = require('@strapi/strapi').factories

module.exports = {
  exampleAction: async (ctx, next) => {
    try {
      let data = await strapi.entityService.findMany('api::order.order', {
        fields: ['id', 'address', "shippingAddress"]
      })
      console.log('data :', data);
      return data
    } catch (err) {
      ctx.body = err;
    }
  }
};
