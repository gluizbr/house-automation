const proxy = [
  {
    context: '/api',
    target: 'https://56890ff862a5.ngrok.io',
    // pathRewrite: {'^/api' : ''}
  }
];
module.exports = proxy;
