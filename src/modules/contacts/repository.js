import schema from './schema.js';
import mongoose from 'mongoose';

module.exports = mongoose.model('contacts', schema);