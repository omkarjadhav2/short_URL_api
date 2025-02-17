const jwt = require("jsonwebtoken");
const secretKey = "Omkar@10";  // Fixed typo in "sercretkey"

function setUser(user) {
    return jwt.sign({ _id : user._id , email : user.email}, secretKey);  // Add expiry time for security
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
