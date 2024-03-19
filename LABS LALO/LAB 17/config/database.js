const mysql = require('mysql2');


const pool = mysql.createPool({
    host: 'localhost',
    user: 'root', 
    database: 'lab_19',


module.exports = pool.promise();
