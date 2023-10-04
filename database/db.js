const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_accesorios_db'
});

conexion.connect((error)=>{
 if(error){
    console.error('El error de conexion es:'+error);
    return
 }
console.log('Conectando a la DB MySQL');
})
 module.exports = conexion;

