const router = require('express').Router();
const dbController = require('../controllers/dbController');

router.post('/project', dbController.setProject);
router.post('/addMembers', dbController.addMembers);
router.post('/getProjects', dbController.getProjects);

module.exports = router;
