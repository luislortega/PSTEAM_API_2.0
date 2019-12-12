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
                    let validad = element.validade
                        let vector_datos = validad.split("-");
                        let fecha = vector_datos[2]+"-"+vector_datos[1]+"-"+vector_datos[0];
                        usuario.create({
                            usuario: element.usuario,
                            senha: element.senha,
                            validade: fecha,
                            host: element.host,
                            vendedor: element.vendedor,
                            id_device: element.id,
                            bootloader: element.bootloader,
                            board: element.board,
                            brand: element.brand,
                            device: element.device,
                            display: element.display,
                            fingerprint: element.fingerprint,
                            hardware: element.hardware,
                            manufacturer: element.manufacturer,
                            host: element.host,
                            model: element.model
                        }

                        )


                })
            )
        })
})
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function getAllUsers() {
    console.log("Sistema de migracion mysql a postgres")
    return new Promise(function (resolve, reject) {
        con.connect(function (err) {
            if (err) throw err;
            con.query("SELECT * FROM usuarios", function (err, result, fields) {
                if (err) throw err;
                result.forEach(element => {
                    array_usuarios.push(element)

                });
                console.log("Empezando a migrar datos...")

                resolve();
            });
        })
    })
}


