const db = require("../models");
const Image = db.images;




exports.createImage = async (req, res) => {
    try {
        const { filename } = req.file;

        const { image_description } = req.body;
        const { image_title } = req.body

        const image = await Image.create({
            image_description,
            image_title,
            image_path: filename
        }) 

            res.status(200).json(image);

    } catch (error) {
            res.status.json({ message: error.message })
    }
}

exports.getImages = async (req, res) => {
    try {
        const images = await Image.findAll();
        res.status(200).json(images);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.getAmount = async (req, res) => {
    try {
        // Count the number of records in your table
        const dataAmount = await Image.count();
        res.json({ data_amount: dataAmount });
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.updateImages = async (req, res) => {
    try {
        const image_id = req.params.id;
        await Image.update(req.body, {
            where: {
                image_id
            }
        });
        res.status(200).json({ message: "Image updated successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.deleteImage = async (req, res) => {
    try {
        const image_id = req.params.id;
        await Image.destroy({
            where: {
                image_id
            }
        });
        res.status(200).json({ message: "Image deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}