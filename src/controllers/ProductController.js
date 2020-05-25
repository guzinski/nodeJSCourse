const mongoose = require("mongoose");

const Product = mongoose.model("Product");

module.exports = {
    async index(req, res) {
        const products = await Product.find();
        res.json(products);
    },

    async show(req, res) {
        const product = await Product.findById(req.params.id);

        res.json(product);
    },

    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(product);
    },

    async create(req, res) {
        const product = await Product.create(req.body);
        res.json(product);
    },

    async delete(req, res) {
        await Product.findByIdAndDelete(req.params.id);
        res.send();
    },
};
