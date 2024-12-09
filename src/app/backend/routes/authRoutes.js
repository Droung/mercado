const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController.js');
const authMiddleware = require('../middleware/authMiddleware.js');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/protected', authMiddleware, (req, res) => {
  res.json({ message: 'Ruta protegida accedida con éxito' });
});

module.exports = router;
