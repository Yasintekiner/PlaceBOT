const Discord = require('discord.js');
exports.run = (client, message, args) => {


let user = message.mentions.members.first()
if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply

user.addRole('570674091632099343')

message.channel.send(user +' :white_check_mark:  **KULLANICISI** BAŞARIYLA __VİP LİSTESİNE__ **EKLENDİ** :white_check_mark: ')

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['vip'],
  permLevel: 2
};

exports.help = {
  name: 'vip',
  description: 'kişiyi vip ekler.',
  usage: 'vip'
};
