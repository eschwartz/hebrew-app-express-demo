// Load express (runs our server)
const express = require('express');

// Load mustache-express. 
// Allows us to use mustache templating with express
const mustacheExpress = require('mustache-express');

// Initialize the express app (server)
const app = express();



// We'll listen for requests on this port
// For local development, this means we can
// open the app our browser at http://localhost:300
//
// The standard port for websites is 80.
// When our app is deployed, you'll need to set 
// the environment variable: PORT=80
const PORT = process.env.PORT || 3000;

// Starting listening for web requests
app.listen(PORT, function() {
    // 👆 This function gets called when the app 
    // is up and ready. This should take < 1 second.
    console.log(`The app is up and ready! Visit http://localhost:${PORT}`);
});
