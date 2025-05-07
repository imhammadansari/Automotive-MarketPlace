const express = require('express');
const router = express.Router();
const { vehicleRegister, viewVehicleById, viewAllVehicles, updateVehicle, deleteVehicle, updateVehicleByAdmin, 
    deleteVehicleByAdmin, viewAllUserVehicles, updateStatus } = require('../controllers/vehicleController');
const isUserLoggedIn = require('../middlewares/isUserLoggedIn');
const isAdminLoggedIn = require('../middlewares/isAdminLoggedIn');
const upload = require('../config/multer');

router.post("/vehicleRegister", upload.fields([
    {name: 'thumbnail', maxCount: 1},
    {name: 'images', maxCount: 7}
]), isUserLoggedIn, vehicleRegister);
router.get("/viewvehicles", viewAllVehicles);
router.get("/viewVehicle/:id", viewVehicleById);
router.get("/viewUserVehicles", isUserLoggedIn, viewAllUserVehicles)
router.post("/updateVehicle/:id", isUserLoggedIn, updateVehicle);
router.post("/updateStatus/:id", isUserLoggedIn, updateStatus);
router.post("/adminUpdateStatus/:id", isAdminLoggedIn, updateStatus);
router.post("/deleteVehicle/:id", isUserLoggedIn, deleteVehicle);
router.post("/adminUpdateVehicle/:id", isAdminLoggedIn, updateVehicleByAdmin);
router.post("/adminDeleteVehicle/:id", isAdminLoggedIn, deleteVehicleByAdmin);

module.exports = router;