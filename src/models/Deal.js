const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const DealSchema = new mongoose.Schema({
  number: {
    type: String,
    required: true
  },
  orderId: {
    type: Number,
    required: true
  },
  title: { 
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  organization: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
},
{
  timestamps: true,
});

const Deal = mongoose.model('Deal', DealSchema);
module.exports = Deal;