const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const { orderController } = require('../controller/orderController')
const { homeController } = require('../controller/homeController')
const { aboutController } = require('../controller/aboutController')
const { contactController } = require('../controller/contactController')
const { qualityController } = require('../controller/qualityController');
const { shopController } = require('../controller/shopController');
const multer = require("multer")
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/uploads/"); // Spécifiez le dossier de destination sur le disque
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Utilisez le nom de fichier d'origine
    },
});

const upload = multer({ storage: storage });
/** 
* @Get {/}
* @return hbs file page index 
*/
router.get('/', homeController)

/** 
* @Get {Contact}
* @return hbs file page contact 
*/

router.get('/contact', contactController);

/**
 * @Get {About}
 * @return hbs file page about 
 */
router.get('/about', aboutController);

/**
 * @Get {Quality}
 * @return hbs file page about 
 */
router.get('/quality', qualityController);


/**
 * @Get {Shop}
 * @return hbs file page about 
 */
router.get('/shop', shopController)

/**
 * @Post {*}
 * @return *
 */
router.post('/send', upload.single('fs'), (req, res) => {
    req.body.file = req.file;
    orderController(req,res)

    // console.log("router : "+res);
    // res.status(200).json(req.body)


});

module.exports = router;
