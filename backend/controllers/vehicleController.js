const vehicleModel = require('../models/vehicleModel');
const upload = require('../config/multer');

const vehicleRegister = async function (req, res){
    try {
        if(!req.files?.thumbnail || !req.files?.images) return res.status(404).send("Images is required");
        const { name, ownerName, model, fuelType, seats, hybrid, make, color, engine, mileage, condition, price, status, city, phoneNumber,
            fuelTankCapacity, transmission, odometer, description } = req.body;
        console.log(req.body);
        const thumbnail = req.files.thumbnail[0].buffer;
        const images = req.files.images.map(image => image.buffer);
        
        const newRequest = await vehicleModel.create({
            name, 
            ownerName,
            model, 
            fuelType, 
            seats, 
            hybrid, 
            make, 
            color,
            engine, 
            mileage, 
            condition, 
            price,
            status,
            thumbnail,
            images,
            city,
            phoneNumber, 
            odometer,
            fuelTankCapacity,
            transmission,
            description,
            user: req.user._id
        });
        res.status(200).json(newRequest);

    } catch (error) {
        res.status(500).json({ message: 'Failed to register vehicle', error: error.message });
    }
}

const viewAllVehicles = async function (req, res){
    try {
        const vehicles = await vehicleModel.find();

        if(!vehicles) return res.status(400).send("No Vehicles found");

        res.status(200).send(vehicles);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const viewAllUserVehicles = async function (req, res){
    try {
        const userID = req.user._id;

        const vehicles = await vehicleModel.find({user: userID});

        if(!vehicles || vehicles.length === 0) return res.status(400).send("Vehicles not found");

        res.status(200).send(vehicles);
    } catch (error) {
        res.status(500).send(error.message);

    }
}

const viewVehicleById = async function (req, res){
    try {
        const vehId = req.params.id;
        const vehicle = await vehicleModel.findById(vehId);

        if(!vehicle) return res.status(500).send("Vehicle not found");

        res.status(200).send(vehicle);

    } catch (error) {
        res.status(500).send(error.message);
    }
}

const updateVehicle = async function (req, res){
    try {
        const vehID = req.params.id;
        const updatedVeh = await vehicleModel.findByIdAndUpdate(
            vehID,
            {...req.body},
            {new: true, runValidators: true}
        )

        if(!updatedVeh) return res.status(400).send("Vehicle does not exist");

        res.status(200).send({updatedVeh: updatedVeh});
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const updateStatus = async function (req, res){
    try {
        const { id, status } = req.body;
        console.log(req.body);

        const updateStatus = await vehicleModel.findByIdAndUpdate(
            id,
            {status},
            {new: true,
            runValidators: true
            }
        );

        if(!updateStatus) return res.status(404).send("Not Found");

        res.status(200).json({request: updateStatus});
    } catch (error) {
        res.status(500).send(error.message);
        
    }
}

const updateVehicleByAdmin = async function (req, res){
    try {
        const vehID = req.params.id;
        const updatedVeh = await vehicleModel.findByIdAndUpdate(
            vehID,
            {...req.body},
            {new: true, runValidators: true}
        )

        if(!updatedVeh) return res.status(400).send("Vehicle does not exist");

        res.status(200).send({updatedVeh: updatedVeh});
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const deleteVehicle = async function (req, res){
    try {
        const vehID = req.params.id;
        const deleteVeh = await vehicleModel.findByIdAndDelete(vehID);

        if(deleteVeh) return res.status(400).send("Vehicle does not exist");

        res.status(200).send(`Vehicle with the ${vehID} has been deleted.`);
    } catch (error) {
        res.status(500).send(error.message);

    }
}

const deleteVehicleByAdmin = async function (req, res){
    try {
        const vehID = req.params.id;
        const deleteVeh = await vehicleModel.findByIdAndDelete(vehID);

        if(deleteVeh) return res.status(400).send("Vehicle does not exist");

        res.status(200).send(`Vehicle with the ${vehID} has been deleted.`);
    } catch (error) {
        res.status(500).send(error.message);

    }
}
module.exports = { vehicleRegister, viewAllVehicles, viewAllUserVehicles, viewVehicleById, updateVehicle, updateVehicleByAdmin, 
    deleteVehicle, deleteVehicleByAdmin, updateStatus };