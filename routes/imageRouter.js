const express = require("express");
const router = express.Router();
const { createImage, getImages, updateImages, deleteImage, getAmount } = require("../controllers/imageController");
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



router.post('/', upload.single("image") , createImage);
router.get('/', getImages);
router.get("/amount", getAmount);
router.put('/:id', updateImages);
router.delete('/:id', deleteImage);

module.exports = router;