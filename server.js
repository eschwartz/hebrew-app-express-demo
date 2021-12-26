// Load path: a library included with Node.js
// to work with file paths.
const path = require('path');

// Load express (runs our server)
const express = require('express');

// Load our index.js router
const indexRouter = require('./routes/index.js');

// Load mustache-express. 
// Allows us to use mustache templating with express
const mustacheExpress = require('mustache-express');

// Initialize the express app (server)
const app = express();

// Tell express to use our index.js router
app.use('/', indexRouter);

// Tell express to use mustache to render (generate) HTML
app.engine('mst', mustacheExpress());
app.set('view engine', 'mst');

// Express will look in the /views folder
// for any file with a `.mst` extension
// These files will be our HTML templates 
app.set('views', path.join(__dirname, 'views'));

// "Static" files will be located in the /public
// folder. This will include images, JS files, 
// or any HTML files which don't need data from the database.
app.use(express.static(path.join(__dirname, 'public')));


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
