const db = require("../models");


const  FAQ = db.faqs;

exports.createFAQ = async (req, res) => {
    try {
        const {faq_question,faq_answer } = req.body;
        const faq = await FAQ.findOne({ where: { faq_question: faq_question } });

        if (faq) {
            return res
                .status(409)
                .json({ message: "This question aready exists" });
        }

         await FAQ.create({
            faq_question,
            faq_answer
        });
        res.status(200).json({message: "FAQ created successfully"});
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


exports.getFAQs = async (req, res) => {
    try {
        const faqs = await FAQ.findAll();
        res.status(200).json(faqs);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.getAmount = async (req, res) => {
    try {
        // Count the number of records in your table
        const dataAmount = await FAQ.count();
        res.json({ data_amount: dataAmount });
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.updateFAQ = async (req, res) => {
    try {
        const faq_id = req.params.id;
        await FAQ.update(req.body, {
            where: {
                faq_id
            }
        });
        res.status(200).json({ message: "FAQ updated successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.deleteFAQ = async (req, res) => {
    try {
        const faq_id = req.params.id;
        await FAQ.destroy({
            where: {
                faq_id
            }
        });
        res.status(200).json({ message: "FAQ deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}