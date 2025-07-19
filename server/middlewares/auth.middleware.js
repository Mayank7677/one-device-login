const jwt = require("jsonwebtoken");
const userModel = require("../src/models/user.model");

module.exports = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    let decode = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decode.id);

    if (!user || user.currentToken !== token) {
      return res.status(401).json({ message: "Invalid token" });
    }

    req.user = user; // Attach user to request object
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error("Authentication error:", error);
    return res.status(401).json({ message: "Invalid token" });
  }
};
