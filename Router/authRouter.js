const express = require('express');
const router = express.Router();
const { hello, generateToken, postBody } = require('../controller/authControler');

// Define a route to say hello
router.get('/hello', hello);

// Define a route for generating the token with userId
router.get('/token', (req, res) => {
    // Example: Pass a userId (you can replace this with actual logic)
    const userId = req.query.userId; // or req.body.userId if you want to pass it in a POST request
    if (!userId) {
        return res.status(200).json({ message: 'token is ' });
    }
    const token = generateToken(userId);
    res.status(200).json({ token });
});

// Define a route for the post body
router.post('/post', postBody);
module.exports = router;
