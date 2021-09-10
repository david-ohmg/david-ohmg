require('dotenv').config();
const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({intents: [Intents.FLAGS.GUILDS]});

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', msg => {
	try{
		switch (msg.content) {
			case "!froggy":
				const embed3 = new MessageEmbed()
					.setTitle("FROGGY TOAD!")
					.setColor("blurple")
					.setAuthor("Frog")
					.setImage("https://i.imgur.com/VhmV9a8.jpg")
				msg.channel.send(embed3)
				.catch(console.error);
				break;
			}
	} catch (err) {
		console.log(err);
	}
});

try {
	client.login(process.env.CLIENT_TOKEN);
} catch(err) {
	console.log(err);
}