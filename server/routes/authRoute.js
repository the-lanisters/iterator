const router = require('express').Router();
const authController = require('../controllers/authController');

router.get('/', (req, res) => {
  res.json({
    message: 'Hello'
  });
});

router.post('/signin', authController.signIn);
router.post('/signup', authController.signUp);

module.exports = router;
