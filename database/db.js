const sql = require("mysql");

let con = sql.createConnection({
    host: "localhost",
    user: "admin",
    password: "admin",
    database: "database"
});

con.connect((err) => {
    if (err) throw err;
    console.log("Connected")
});

function dbGetData(callback) {
    con.query("SELECT * FROM temperatures", function(err, data) {
        if (err) return callback(err, null); 
        callback(null, data); 
    });
}
