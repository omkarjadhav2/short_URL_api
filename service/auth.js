const jwt = require("jsonwebtoken");
const secretKey = "Omkar@10"; 

function setUser(user) {
    return jwt.sign({ _id : user._id , email : user.email}, secretKey); 
}

function getUser(token) {
    if (!token) return null;
    try {
        return jwt.verify(token, secretKey);
    } catch (error) {
        console.error("JWT Verification Error", error.message);
        return null;
    }
}

module.exports = { setUser, getUser };
