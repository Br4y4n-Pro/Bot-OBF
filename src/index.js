const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');

const client = new Client()

//Qr code 

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});


//mensajes
client.on('message', message => {
	console.log(message.body);
});
 

client.on('message', message => {
	if(message.body === '!ping') {
		message.reply('su madre');
	}
});




client.initialize()
