const db = require("../models");


const Update = db.updates

exports.createUpdate = async (req, res) => {
    try {
        const { filename } = req.file;

        const { update_title } = req.body;
        const { update_description } = req.body
        const { update_link } = req.body

        await Update.create({
            update_title,
            update_description,
            update_link,
            update_image_path: filename
        });
        res.status(200).json({ message: "Update created successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.getUpdates = async (req, res) => {
    try {
        const updates = await Update.findAll();
        res.status(200).json(updates);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.getAmount = async (req, res) => {
    try {
        // Count the number of records in your table
        const dataAmount = await Update.count();
        res.json({ data_amount: dataAmount });
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.updateUpdates = async (req,res) =>{
    try {
        const update_id = req.params.id;
        await Update.update(req.body, {
            where: {
                update_id
            }
        });
        res.status(200).json({ message: "Update updated successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


exports.deleteUpate = async (req,res) =>{
    try {
        const update_id = req.params.id;
        await Update.destroy({
            where: {
                update_id
            }
        });
        res.status(200).json({ message: "Update deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}