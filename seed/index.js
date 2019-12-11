//Models of the default || The Seed work for default values at the database 
const {
    sequelize,
    usuario
} = require('../src/models')

const Promise = require('bluebird')


//Init the seed with command node seed 
sequelize.sync({ force: true })
    .then(async function () {
    })

var mysql = require('mysql');
/* http://162.241.79.199:2086/
root
_0hP-@G$_L
*/
var con = mysql.createConnection({
    host: "162.241.76.199",
    user: "wwpste",
    password: "_0hP-@G$_L",
    database: "wwpste_am"
});

con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM usuarios", function (err, result, fields) {
        if (err) throw err;
        result.forEach(element => {
        console.log(element.usuario);
            
        });
    });
});