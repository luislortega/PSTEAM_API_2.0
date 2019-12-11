//Models of the default || The Seed work for default values at the database 
const {
    sequelize,
    usuario
} = require('../src/models')

const Promise = require('bluebird')



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

let array_usuarios = []

getAllUsers().then(function () {
    sequelize.sync({ force: true })
        .then(async function () {
            await Promise.all(
                array_usuarios.forEach(element => {
                    usuario.create({
                        usuario: element.usuario,
                        senha: element.senha,
                        validade: element.validade,
                        host: element.host,
                        vendedor: "SayGus",
                        id_device: element.id,
                        bootloader: element.bootloader,
                        board: element.board,
                        brand: element.brand,
                        device: element.device,
                        display: element.display,
                        fingerprint: element.fingerprint,
                        hardware: element.hardware,
                        manufacturer: element.manufacturer,
                        host: element.host
                    }

                    )
                    console.log("hola")
                })
            )
        })
})

function getAllUsers() {
    return new Promise(function (resolve, reject) {
        con.connect(function (err) {
            if (err) throw err;
            con.query("SELECT * FROM usuarios", function (err, result, fields) {
                if (err) throw err;
                result.forEach(element => {
                    array_usuarios.push(element)
                    console.log("hola")

                });
                resolve();
            });
        })
    })  
}


