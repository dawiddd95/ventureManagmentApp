const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const signschema = new Schema({
  id: {type: String, required: true},
  surname: {type: String, required: true},
  name: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  key: {type: String, required: true},
  active: {type: Boolean, required: true},
  roles: [{type: String, required: true}]
});

module.exports = mongoose.model('signmodel', signschema);

// W Schemacie bookings musze ogarnac jakas referencje do Tego schematu uzytkownika
// i wtedy np:
// id: referencja do user id
// name: nazwa pracownika
// age: wiek pracownika
// workstate: typ wykonywanej pracy

// var ToySchema = new Schema({ name: String });
// var ToyBoxSchema = new Schema({
//   toys: [ToySchema],
//   buffers: [Buffer],
//   strings: [String],
//   numbers: [Number]
//   // ... etc
// });