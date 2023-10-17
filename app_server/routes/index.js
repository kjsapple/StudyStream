var express = require('express');
var router = express.Router();
var ctrlCatalogue = require('../controllers/list');
var ctrlOthers = require('../controllers/others');
/* courses pages */
router.get('/', ctrlCatalogue.homelist);
router.get('/course/query/new', ctrlCatalogue.addQuery);
router.get('/course/Python', ctrlCatalogue.courseInfo); 
router.get('/course/ml', ctrlCatalogue.courseInfo1); 
router.get('/course/net', ctrlCatalogue.courseInfo2); 
router.get('/course/java', ctrlCatalogue.courseInfo3); 
router.get('/course/course-catalogue', ctrlCatalogue.catalogue);


/* Other pages */

router.get('/about', ctrlOthers.about);

module.exports = router;