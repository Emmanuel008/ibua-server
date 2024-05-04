const db = require("../models");

const Testimony = db.testimonies;

exports.createTestimony = async (req, res) =>{
    try {
        const { filename } = req.file;
        const { testimony_content } = req.body;
        const { testimony_author } = req.body
        const { author_postion } = req.body


        await Testimony.create({
            testimony_author,
            testimony_content,
            author_postion,
            image_path: filename
        });
        res.status(200).json({message: "Testimony created successfully"});
    } catch (error) {
        res.status.json({ message: error.message })
    }
}

exports.getTestimonies = async (req, res) => {
    try {
        const testimonies = await Testimony.findAll();
        res.status(200).json(testimonies);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.getAmount = async (req, res) => {
    try {
        // Count the number of records in your table
        const dataAmount = await Testimony.count();
        res.json({ data_amount: dataAmount });
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.updateTestimony = async (req, res) => {
    try {
        const testimony_id = req.params.id;
        await Testimony.update(req.body, {
            where: {
                testimony_id
            }
        });
        res.status(200).json({ message: "Testimony updated successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.deleteTestimony = async (req, res) => {
    try {
        const testimony_id = req.params.id;
        await Testimony.destroy({
            where: {
                testimony_id
            }
        });
        res.status(200).json({ message: "Testimony deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}