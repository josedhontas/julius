import {app} from './app';

const porta = 3000;

const server = app.listen(porta, () => console.log('App iniciado na porta', porta))

// ao encerrar processo o app é finalizado
process.on('SIGINT', ()=> {
    server.close();
    console.log('App encerrado')
})