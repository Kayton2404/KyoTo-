const Discord = require('discord.js')
const bot = new Discord.Client()
const webhook = new Discord.WebhookClient('650428709077254165','bJQQTtq5nNInlOSwo6lovVmrMn30IgX2gk6X7IpYQ-xeaptBgxYYkBV0FikdL7O2L6DU')


//instance
bot.on('ready', function () {
	bot.user.setGame('Hacking').catch(console.error)
	console.log("//////////////////////////")
	console.log("Connexion effectué !")
	console.log("//////////////////////////")

})

bot.on('message', function (message) {
	if (message.content === '/help') {
		let testEmbed = new Discord.RichEmbed()
		.setDescription("Description")
		.setColor("#FF69B4")
		.addField("Première ligne", "Deuxime ligne")
		.addField("Première ligne", "Deuxime ligne")
		.setFooter('Footer')
		message.channel.send(testEmbed)
		console.log("/help")

	}

	if (message.content === '/server') {
		let server_name = message.guild.name 
		let server_size = message.guild.members.size 
		message.channel.send('Server : ' + server_name + '\nPersonne :' + server_size)
		webhook.send('Toutes les commandes Tokyo NudeS')	
		
	}	
		
})
	
bot.login(process.env.TOKEN)




