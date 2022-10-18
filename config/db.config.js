const mysql = require('mysql');

// create mysql connection

const dbconn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'softsuave',
    database: 'akashdb'
});

dbconn.connect(function(error){
    if(error) throw error;
    //{
  //      console.error('error connecting: ' + error.stack);
    //}
    console.log('db connected successfully.');
});

module.exports = dbconn;