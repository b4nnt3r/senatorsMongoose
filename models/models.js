const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/senatorsdb');

const senatorSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  party: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  person: {
    gender: {
      type: String,
      required: true
    },
    firstname: {
      type: String,
      required: true
    },
    lastname: {
      type: String,
      required: true
    },
    birthday: {
      type: Date,
      required: true
    }
  },
  phone: {
    type: String,
    required: true
  },
  extra: {
    address:  String,
    contact_form: String,
    fax: String,
    office: String
  }
})

senatorSchema.statics.findAndSort = function(find, render) {
  this
    .find(find)
    .then(function(results) {
      render(results);
    });
}

const Senator = mongoose.model('Senator', senatorSchema, 'senatorsdb');

module.exports = Senator;
