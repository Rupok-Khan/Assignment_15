const jwt = require('jsonwebtoken');

// "Hello World" controller
const hello = (req, res) => {
  res.status(200).json({ message: 'Hello World' });
};

// Generate JWT token controller
const generateToken = (userId) => {
    // Access JWT_SECRET from environment variables
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
}
// "Post body" controller
const postBody = (req, res) => {
  res.status(200).json({ message: 'I am post body' });
};

module.exports = { hello, generateToken, postBody };
