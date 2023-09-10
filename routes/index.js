const express = require('express');
const router = express.Router();
const { orderController } = require('../controller/orderController')
const { homeController } = require('../controller/homeController')
const { aboutController } = require('../controller/aboutController')
const { contactController } = require('../controller/contactController')
const { qualityController } = require('../controller/qualityController');
const { shopController } = require('../controller/shopController');

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
router.post('/send', orderController);

module.exports = router;
