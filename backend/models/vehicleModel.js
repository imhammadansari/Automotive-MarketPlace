const mongoose = require('mongoose');

const VehicleSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },
    name: {
        type: String,
        required: true
    },
    ownerName: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    fuelType: {
        type: String,
        enum: ["Petrol", "Diesel", "CNG", "LNG"],
        required: true
    },
    seats: {
        type: Number,
        required: true
    },
    hybrid: {
        type: String,
        enum: ["Yes", "No"],
        required: true
    },
    make: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    engine: {
        type: String,
        required: true
    },
    mileage: {
        type: String,
        required: true
    },
    condition: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        default: "Active",
    },
    city: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    odometer: {
        type: String,
        required: true
    },
    fuelTankCapacity: {
        type: String,
        required: true
    },
    transmission: {
        type: String,
        required: true,
        enum: ["Automatic", "Manual"]
    },
    description: {
        type: String,
        required: true
    },
    thumbnail: {
        type: Buffer,
        required: true
    },
    images: [{
        type: Buffer
    }]
});

module.exports = mongoose.model("Vehicles", VehicleSchema);