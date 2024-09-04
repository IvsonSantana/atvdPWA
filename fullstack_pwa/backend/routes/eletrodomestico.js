const express = require('express');
const router = express.Router();
const Eletrodomestico = require('../models/Eletrodomestico');

// Criar uma nova Eletrodomestico
router.post('/', async (req, res) => {
    const { marca, tipo } = req.body;
    const newEletrodomestico = new Eletrodomestico({ marca, tipo });
    await newEletrodomestico.save();
    res.json(newEletrodomestico);
});

// Listar todos Eletrodomesticos
router.get('/', async (req, res) => {
    const eletrodomesticos = await Eletrodomestico.find();
    res.json(eletrodomesticos);
});

// Atualizar um Eletrodomestico
router.put('/:id', async (req, res) => {
    const { marca, tipo } = req.body;
    const updatedEletrodomestico = await Eletrodomestico.findByIdAndUpdate(req.params.id, { marca, tipo }, { new: true });
    res.json(updatedEletrodomestico);
});

// Deletar uma Eletrodomestico
router.delete('/:id', async (req, res) => {
    await Eletrodomestico.findByIdAndDelete(req.params.id);
    res.json({ message: 'Eletrodomestico deletada com sucesso!' });
});

module.exports = router;
