const express = require("express");
const router = express.Router();


const { createUpdate, getUpdates, updateUpdates, deleteUpate, getAmount } = require("../controllers/updateController");

const multer = require("multer");


// img storage path
const imgconfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./uploads")
    },
    filename: (req, file, callback) => {
        callback(null, `imgae-${Date.now()}.${file.originalname}`)
    }
})


// img filter
const isImage = (req, file, callback) => {
    if (file.mimetype.startsWith("image")) {
        callback(null, true)
    } else {
        callback(new Error("only images is allowd"))
    }
}

const upload = multer({
    storage: imgconfig,
    fileFilter: isImage
});


router.post('/', upload.single("image") , createUpdate);
router.get('/', getUpdates);
router.get("/amount", getAmount);
router.put('/:id', updateUpdates);
router.delete('/:id', deleteUpate);


module.exports = router;