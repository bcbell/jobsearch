var express = require('express');
var router = express.Router();
const searchCtrl = require('../controllers/search')

/* GET home page. */
router.get('/', searchCtrl.index)
router.post('/results', searchCtrl.jobQuery)

module.exports = router;
