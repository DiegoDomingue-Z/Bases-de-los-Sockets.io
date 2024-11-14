const socketControlador = (socket) => {
    console.log('Cliente conectado', socket.id);

    socket.on('disconnect', () => {
        console.log('Cliente desconectado')
    })

    //el colvac es lo quiero hacer cuando ese cliente emita ese mensaje
    socket.on('enviar-Mensaje', (payload, callback) => {

        const id = 12234;
        callback(id)
        //sin el broadcast solo el cliente que envie el mensaje lo va resivir 
        //con el brotcas tos los demas lo van a resivir menos el que lo envia
        socket.broadcast.emit('enviar-Mensaje', payload)
        console.log(payload)
    })

}

module.exports = socketControlador;