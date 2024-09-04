const mongoose = require('mongoose');

const eletrodomesticoSchema = new mongoose.Schema({
    marca: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Eletrodomestico', eletrodomesticoSchema);
