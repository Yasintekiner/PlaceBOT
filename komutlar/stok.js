const Discord = require('discord.js');

    exports.run = async function(client, message, args) {  
      const embed = new Discord.RichEmbed()
      .setTitle("Stok bilgileri!")
      .setTimestamp()
      .setDescription(`__İşte Stok Bilgileri__:`)
      .addField("MasGean in stoğu:", "**10.000**")
      .addField("Stok ne zaman gelir?", "**stoklar __hazır olduğu__ anda satış başlar**")
      .setColor("RANDOM")
     
      message.channel.send(embed)

};

    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: [],
      permLevel: 0
    };

    exports.help = {
      name: 'stok',
      description: 'Stok Bilgisini Gösterir.',
      usage: 'stok'
    };
