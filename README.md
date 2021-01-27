# DiscordRichPrecense

A simple discord rich precense

## Instalação

Para usar este sistema em que baixar o [node](https://nodejs.org/en/download/)

Depois abra o cmd dentro da pasta onde se encontra o arquivo main.js e escreva:
```node
npm i
```

## Como usar
Abra o main.js e edite esta zona:

```node.js
async function atividade() {
rpc.setActivity(
	{
		details: "Escreva os detalhes",
		state: "Escreva o estado",
		largeImageKey: "icon",
		instance: true
	});
}
```

## Credits
By [Sintzy](https://github.com/Sintzy) 
