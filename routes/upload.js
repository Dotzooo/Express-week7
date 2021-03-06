var express = require('express')
var router = express.Router()

const UploadController = require('../controllers/upload')

const handleErrorAsync = require("../service/handleErrorAsync")
const { isAuth } = require('../service/isAuth')

const upload = require('../middleware/upload')

// δΈε³εη
router.post('/file/image', upload, handleErrorAsync(UploadController.uploadImage))

module.exports = router