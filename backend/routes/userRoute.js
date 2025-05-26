const express = require('express');
const { loginUser, registerUser, logoutUser, viewUser } = require('../controllers/usersController');
const isUserLoggedIn = require('../middlewares/isUserLoggedIn');
const router = express.Router();

router.post("/registerUser", registerUser);
router.post("/userLogin", loginUser);
router.get("/viewUser", isUserLoggedIn, viewUser);
router.post("/userLogout", isUserLoggedIn, logoutUser);

module.exports = router;