const presence = require('discord-rpc');
const rpc = new presence.Client({ transport: 'ipc' });

console.log("\x1b[36mRich Exibed\n\nRich Precense \nby \x1b[33m\x1b[4mSintzy#9790")

rpc.login({ clientId: '773624901474189312', clientSecret: 'null' }).catch(console.error);



rpc.on('ready', () => {
	atividade()
});

async function atividade() {
rpc.setActivity(
	{
		details: "Fodi a minha ex? Olha no que deu!!",
		state: "Pornhub.com",
		largeImageKey: "kk",
        partySize: 1,
		partyMax: 10,
        startTimestamp: new Date(),
		instance: true
	});
}

