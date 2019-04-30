    const Discord = require('discord.js');

    exports.run = function(client, message, args) {

      let sirasayisi = parseInt(args.join(' '));
      if (sirasayisi < 1000) return message.reply(" :x: En az  `1000`  robux alabilirsin! ")

      message.reply(`Robux sırasına başarıyla  \`${sirasayisi}\`  sayısı ile girildi! :white_check_mark:`)
      const embed = new Discord.RichEmbed()
      .setTitle("Sıraya girdi!")
      .setTimestamp()
      .setDescription(`**Alacak Sayısı :** ${sirasayisi}`)
      .addField(`Kişi Bilgileri`, `**Adı :** ${message.author.tag} \n**ID'si :** ${message.author.id}`)
      .setColor("RANDOM")

      client.channels.get('570637076656160779').send(embed)


};

    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: [],
      permLevel: 0
    };

    exports.help = {
      name: 'sıragir',
      description: 'Robux sırasına girersiniz.',
      usage: 'sıragir'
    };
