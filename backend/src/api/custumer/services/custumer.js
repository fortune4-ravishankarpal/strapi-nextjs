'use strict';

/**
 * custumer service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::custumer.custumer');
