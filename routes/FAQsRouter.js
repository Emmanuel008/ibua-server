const express = require("express");
const router = express.Router();

const { createFAQ, getFAQs, updateFAQ, deleteFAQ, getAmount } = require("../controllers/faqsController");

router.post("/", createFAQ);
router.get("/", getFAQs);
router.get("/amount", getAmount);
router.put("/:id", updateFAQ);
router.delete("/:id", deleteFAQ);

module.exports = router;