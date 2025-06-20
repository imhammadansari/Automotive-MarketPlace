const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

dotenv.config();

app.use(cors({
    origin: "https://automotive-market-place.vercel.app",
    credentials: true
}))
const userRoute = require('./routes/userRoute');
const vehicleRoute = require('./routes/vehicleRoute');
const adminRoute = require('./routes/adminRoute');


const PORT = process.env.PORT || 8000;
const URL = process.env.MONGODB_URL;
const connectDB = async () => {
    try {
        await mongoose.connect(URL);
        console.log("DB Connected");
    } catch (error) {
        console.log("MongoDB connection failed", error.message);
        process.exit();
    }
}

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/users", userRoute);
app.use("/vehicles", vehicleRoute);
app.use("/admin", adminRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});