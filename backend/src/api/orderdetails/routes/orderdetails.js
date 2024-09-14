module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/orderdetails',
      handler: 'orderdetails.exampleAction',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
