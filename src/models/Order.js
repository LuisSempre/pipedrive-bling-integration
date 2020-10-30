const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const DealSchema = new mongoose.Schema({
  numero: {
    type: Number,
    required: true
  },
  idPedido: {
    type: Number,
    required: true
  },
  volumes: [{ 
    servico: { type: String},
    codigoRastreamento: { type: String },
  }],
  value: {
    type: Number,
    required: true
  },
  orgName: {
    type: String,
    required: true
  },
},
{
  timestamps: true,
});

const Deal = mongoose.model('Deal', DealSchema);
module.exports = Deal;