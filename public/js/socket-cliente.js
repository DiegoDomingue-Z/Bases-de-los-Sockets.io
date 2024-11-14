//referencias del html
const conectado    = document.querySelector('#conectado');
const desconectado = document.querySelector('#desconectado');
const mensaje      = document.querySelector('#mensaje');
const enviar       = document.querySelector('#enviar');

const cliente = io();

//el on es para estar escuchando un evento
// el connect se va disparar cuando tenemos una conexion 
cliente.on('connect', () => {
    console.log('Conectando');

    conectado.style.display = ''
    desconectado.style.display = 'none'
})

cliente.on('disconnect', () => {
    console.log('Servidor Desconectado');

    conectado.style.display = 'none'
    desconectado.style.display = ''
})


 cliente.on('enviar-Mensaje', (payload) =>{
    console.log(payload)
 })


enviar.addEventListener('click', () => {
    const ms = mensaje.value; 
    const payload = {
        mensaje: ms,
        id: '1',
        fecha: new Date()
    }

    //el enevento emit es para emitir un evento al servidor
    //no colocar mayusculas ni caracteres especiales en el nombre del evento
    cliente.emit('enviar-Mensaje',payload, (id) => {
        console.log('Desde el servidor', id)
    }) 
})