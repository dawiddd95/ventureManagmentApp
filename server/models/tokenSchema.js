const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tokenschema = new Schema({
   _userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
   token: { type: String, required: true },
   createdAt: { type: Date, required: true, default: Date.now, expires: 43200 }
 });

module.exports = mongoose.model('tokenmodel', tokenschema);