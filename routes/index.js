// Import the express library
const express = require('express');

// Import our database connection
const db = require('../database.js');

// Make a new "Router"
// A router is a container for a set of URL paths
const router = new express.Router();

// Setup a new URL at /index.html
router.get('/index.html', async function(res, res) {
    // 👆 This function is run whenever a user
    // goes to the /index.html web page
    console.log('in index.html')

    // Execute a sql query
    let sqlQuery = `
        SELECT * FROM Words;
    `;
    let dbResults = await db.query(sqlQuery);
    // db.query() returns an array the two items
    // The first item is the actual results,
    // the second item is metadata about the result
    // (which we probably don't care about)
    let dbRows = dbResults[0];
    
    /*
    So now the `dbRows` variable is an array of objects,
    eg:
        [
            {
                id: 1,
                word: 'שלום',
                audioSrc: '/audio/shalom.mp3',
                startMs: 5000,
                endMs: 8000
            },
            {
                id: 2,
                word: 'אני',
                audioSrc: '/audio/ani.mp3',
                startMs: 6000,
                endMs: 8000
            }
        ]
    */

    // Render a file called index.mst in our /view folder
    // The second argument is that data that we're passing
    // to the index.mst template.
    res.render('index', {
        pageTitle: 'Hebrew Learning App',
        words: dbRows
    });
});

// "Export" the router, so other files can "import" (load) it
module.exports = router;