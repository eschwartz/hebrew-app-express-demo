const express = require('express');

// Make a new "Router"
// A router is a container for a set of URL paths
const router = new express.Router();

// Setup a new URL at /index.html
router.get('/index.html', function(res, res) {
    // 👆 This function is run whenever a user
    // goes to the /index.html web page

    // Look for a file called 
    res.render('index');
});

// "Export" the router, so other files can "import" (load) it
module.exports = router;