// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
const moment = require('moment');

module.exports = function (options = {}) {
  return async context => {
    const { data } = context;

    // Throw an error if we didn't get a text
    if(!data.name && !data.address && !data.revenue && !data.phoneCode && !data.phoneNum) {
      throw new Error('A message must have all fields');
    }
    context.data.createdAt = moment().valueOf();

    return context;

  };
};
