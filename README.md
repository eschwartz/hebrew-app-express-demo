# Hebrew Learning Web App

A demo app, showing how to use a Node.js server to pull data from a database and render it as HTML.

The code here shows how to:

- Connect to a database (see `/database.js`)
- Setup an express server (see `/server.js`)
- Run queries against the database, and pass the results to an HTML file (see `/routes/index.js`)
- Render an HTML file with data from the database, using the Mustache templating engine (see `/views/index.mst`)
- Use jQuery to create custom buttons, and make the app interactive (see `/public/js/words.js`)

There are code comments in each file explaining how every piece works. I tried to keep things simple and to the point. You should be able to modify the existing code to match your needs.

See https://codingstatus.com/how-to-display-data-from-mysql-database-table-in-node-js/ for a walkthrough of using express to render HTML with data from a mysql database.

## Setting up the app

### Installing node

Check if you have node installed on your computer. To test this, run:

```
node -v
```

from a Command Prompt. This will show your node version number. **You must have node v8 or higher** for this code to work. If you get an error running this command, or you have an older version, go to:

https://nodejs.org/en/download/current/

to install the latest version of Node.

### Downloading dependencies

This server depends on a few other libraries to work. To install these dependencies, run this command from a Command Prompt in the project directory:

```
npm install
```

### Setting up your database

You will need a MySql database to run this app. There are sql commands in `database.sql` to setup a sample database. But you can of course use an existing database. You will need to:

- Modify the connection info in `/database.js`
- Modify the SQL query in `/routes/index.js`

## Running the app

Run this command from a Command Prompt in the project directory:

```
node server.js
```

This will start your node server. You can view your web app at http://localhost:3000/index.html

To stop the terminal, go back to your Command Prompt and press `Ctrl-D`. If this doesn't work, press `Ctrl-C` twice.

Note that **every time you change any code, you will need to stop and re-start your node server**.