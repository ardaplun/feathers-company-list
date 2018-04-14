const companies = require('./companies/companies.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(companies);
};
