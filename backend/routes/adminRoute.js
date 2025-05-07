const { adminRegistered, adminLogin, adminLogout } = require("../controllers/adminController");
const isAdminLoggedIn = require("../middlewares/isAdminLoggedIn");
const express = require('express');
const router = express.Router();

router.post("/adminRegister", adminRegistered);
router.post("/adminLogin", adminLogin);
router.post("/adminLogout", isAdminLoggedIn, adminLogout);

module.exports = router;