const { createUser, loginUser, updateUserById, deleteUserById, changePassword } = require('../controllers/userController');

const router = require('express').Router();

router.post('/', createUser);
router.post('/login', loginUser);
router.put('/:id', updateUserById);
router.delete('/:id', deleteUserById);
router.put('/changepassword/:id', changePassword);


module.exports = router;