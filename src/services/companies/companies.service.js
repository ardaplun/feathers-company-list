// Initializes the `companies` service on path `/api/companies`
const createService = require('feathers-mongoose');
const createModel = require('../../models/companies.model');
const hooks = require('./companies.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'companies',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/api/companies', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('api/companies');

  service.hooks(hooks);
};
