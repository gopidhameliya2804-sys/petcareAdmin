let jwt = require("jsonwebtoken");
require("dotenv").config();
let key = process.env.KEY;

const Authenticate = async (req, res, next) => {
    try{
        let authHeader = req.headers["authorization"];

        if (!authHeader) {
            return res.status(401).json({
                status: false,
                message:"Unauthorized access: Header not provided."
            });
        }
        let token = authHeader && authHeader.split(" ")[1];

        if(!token){
            return res.status(401).json({
                status: false,
                message:"Unauthorized access: Token is not provided."
            });
        }

        jwt.verify(token, key , (err, data) => {
            if (err) {
                return res.status(401).json({
                    status: false,
                    message:"Unauthorized access: Invalid or expired Token."
                });
            }
                req.user = data;
                next();
        })

    } catch (e) {
        return res.status(401).json({
            status: false,
            message:"Unauthorized access: Token is expired."
        });
    }
}

const Authorize = (role) => {
    return (req, res , next) => {
        console.log(req.user.role);
        let data = req.user;
        if (req.user.role != role) {
            return res.status(403).json({ message: "Access Demied" , user:data})
        }
        next();
    }
}

module.exports = { Authenticate, Authorize }