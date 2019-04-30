const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (!message.member.roles.has('571638454535061514')) return message.channel.send(`:x: **yeterince silkici değilsin!**`)
  let kisi = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply('Silkicek kişiyi yazmalısın!').catch(console.error);
  
 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['silk'],
  permLevel: 2
};

exports.help = {
  name: 'silk',
  description: 'birini silkersiniz.',
  usage: 'silk'
};

  
  