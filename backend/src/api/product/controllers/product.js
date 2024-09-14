'use strict';

/**
 * product controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::product.product', ({ strapi }) => ({
    async findMany(ctx) {
        const resposeData = await strapi.entityService.findMany('api::product.product', {
            ...ctx.query
        })
        return resposeData;
    }
}));
