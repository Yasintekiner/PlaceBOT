const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Üzgünüm dostum, bunu yapamazsın.");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("O kullanıcıyı bulamadım, sen.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Bir rol belirtin!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Bu rolü bulamadım.");

  if(!rMember.roles.has(gRole.id)) return message.reply("Böyle bir rolü yok.");
  await(rMember.removeRole(gRole.id));

  try{
    await rMember.send(`RIP, ${gRole.name} rolünü kaybettin.`)
  }catch(e){
    message.channel.send(`RIP <@${rMember.id}>, ${gRole.name} rolünü kaybetti.`)
  }
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'rol-al',
  description: 'Belirtilen kişinin  rolünu alır..',
  usage: 'rol-al [kullanıcı] [@rol]'
};
