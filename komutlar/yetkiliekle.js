const Discord = require('discord.js');
exports.run = (client, message, args) => {


let kullanıcı = message.mentions.members.first()
if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply
if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Üzgünüm dostum, bunu yapamazsın.");
kullanıcı.addRole('571324189546643466')

message.channel.send(kullanıcı +' :white_check_mark:  **KULLANICISI** BAŞARIYLA BOT ARAYÜZÜN DE YETKİLİ OLARAK **EKLENDİ** :white_check_mark: ')

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ekle'],
  permLevel: 4
};

exports.help = {
  name: 'yetkiliekle',
  description: 'kişiyi bot arayüzünde yetkili ekler',
  usage: 'yetkili ekle'
};
