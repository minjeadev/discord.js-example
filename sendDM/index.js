const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
})

client.on('message', message => {
  if(message.content=="!senddm"){
    message.author.send("
  }
})
