const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
})

client.on('message', message => {
  if(message.content=="!ping"){
    message.reply("pong!") // 답장 형식
    // 답장 형식이 아니라 그냥 채널에 메시지만 보내고 싶으면,
    // message.channel.send("pong")
  }
})
