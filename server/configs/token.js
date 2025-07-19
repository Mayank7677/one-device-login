const jwt = require("jsonwebtoken");

const createToken = async (user) => {
  const payload = {
    id: user._id,
    email: user.email,
  };

  // Generate a token 
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });

  // Update the user's currentToken field in the database
  user.currentToken = token;
  user.save();

  return token;
};

module.exports = createToken;
