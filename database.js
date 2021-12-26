// Load in the msql2 library
// See https://github.com/sidorares/node-mysql2
const mysql = require('mysql2');

// Setup a database connection
const connection = mysql.createPool({
    // We're using environment variables for the database configuration
    // This will let you use different configuration
    // whether you're running the app on your home computer
    // vs. if you're running a a deployed app on your hosting server
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PWD,
    database: process.env.MYSQL_DB || 'HebrewLearning'
});

// Export the database connection, so we can
// use it from other files.
// The `.promise()` function allows us to use
// async/await syntax (see /routes/index.js for example)
module.exports = connection.promise();