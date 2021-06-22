const router = require('express').Router();
const multer = require("multer");

const upload = multer({ dest: '../public/images'})

router.post('/upload', upload.single('upload'), (req, res) => {
    res.send()
})

module.exports = router;