const express = require('express');
require('dotenv').config();
const cors = require('cors');
const socketControlador = require('../sockets/controller');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io     = require('socket.io')(this.server);

        this.ruta = {};


        this.middlewares();
        this.rutas();

        //eventos de Sockets
        this.sockets()
    }

    middlewares(){

        //uso de los cors
        this.app.use(cors());


        //directorio publico
        this.app.use(express.static('public'));
    }


    //metodo de las rutas
    rutas(){
       //this.app.use(this.ruta.usuarios, require('../routes/usuarios'));
    }

    sockets(){
        this.io.on('connection', socketControlador)
    }
 
    //metodo del puerto 
    listen(){
        this.server.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', `${ this.port}`)
        });
    }

}
module.exports = Server;