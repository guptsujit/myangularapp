var express = require('express');
var router = express.Router();
const ctrlUser = require('../controllers/user.controller');
const fileCtr = require('../controllers/file.controller');
const jwtHelper = require('../config/jwtHelper');
/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/
router.post('/authenticate', ctrlUser.authenticate);
//jwtHelper.verifyJwtToken;
router.get('/getusers',jwtHelper.verifyJwtToken, ctrlUser.getusers);
router.get('/upload',jwtHelper.verifyJwtToken, fileCtr.upload);

module.exports = router;
