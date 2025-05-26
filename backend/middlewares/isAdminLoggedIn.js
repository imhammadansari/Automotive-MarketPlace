const jwt = require('jsonwebtoken');

const adminModel = require('../models/adminModel');

module.exports = async function (req, res, next){
    if(!req.cookies.token){
        return res.status(200).send("Admin must be loggedIn!");
    }

    try {
        const decoded = jwt.verify(req.cookies.token, process.env.ADMIN_KEY);

        const admin = await adminModel.findOne({email: decoded.email}).select("-password");
        if(!admin) return res.status(500).send("No Admin found");

        req.admin = admin;
        next();
        
    } catch (error) {
        res.status(500).send(error.message);

    }
}
