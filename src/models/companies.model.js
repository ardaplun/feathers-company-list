// companies-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const companies = new Schema({
    name : {
      type: String,
      required: [true, 'name is required']
    },
    address : {
      type: String,
      required: [true, 'address is required']
    },
    revenue : {
      type: Number,
      required: [true, 'revenue is required']
    },
    phoneCode : {
      type: Number,
      required: [true, 'phone Code is required']
    },
    phoneNum : {
      type: Number,
      required: [true, 'phone Number is required']
    },
    offices : [{
      name:String,
      lat:Number,
      lng:Number,
      startDate:{type:Date}
    }],
  });

  return mongooseClient.model('companies', companies);
};
