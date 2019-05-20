const Discord = require('discord.js');
exports.run = (client, message, args) => {


let user = message.mentions.members.first()
if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply

user.removeRole('570674091632099343')

message.channel.send(user +' :white_check_mark:  **KULLANICISI** BAŞARIYLA __VİP LİSTESİNDEN__ **ÇIKARILDI** :white_check_mark: ')

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['vip'],
  permLevel: 4
};

exports.help = {
  name: 'vipsil',
  description: 'kişinin vip ini siler,.',
  usage: 'vipsil'
};
