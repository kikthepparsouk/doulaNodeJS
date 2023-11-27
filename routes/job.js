const router = require('express').Router();

const jobController = require('../controllers/jobcontroler');


router.post('/',jobController.createJob);
router.get('/:id',jobController.getJob);
router.put('/:id',jobController.updateJob);
router.delete('/:id',jobController.deleteJob);
router.get('/:id',jobController.getAllJob);
router.get('/search/:key',jobController.searchJobs);









module.exports = router;