const mysql = require("mysql2");
const util = require('util');

// Connect to database
const db = mysql.createConnection({
    host: 'localhost',
    // Your MySQL username,
    user: 'root',
    // Your MySQL password
    password: 'N78760c172Code!',
    database: 'company'
});
db.connect((err) => {
if(err) throw err;
})
db.query = util.promisify(db.query);
module.exports = db;