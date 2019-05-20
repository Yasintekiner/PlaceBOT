const Discord = require('discord.js');

    exports.run = async function(client, message, args) {
    
      let user = message.mentions.users.first();
      if (message.mentions.users.size < 1) return message.reply('dm gönderilecek kişiyi yazmalısın!').catch(console.error);
      let yazi = args[1]
      if (message.mentions.yazi.size < 1) return message.reply('bir yazı belirtmelisin!').catch(console.error);
      
      client.users.get(user).send(yazi)
      client.users.get(user).send("BU MESAJ SİZE"+ user +'KİŞİSİ TARAFINDAN GÖNDERİLDİ')
      message.channel.send(user +" **KİŞİSİNE**"+ yazi +'MESAJ BAŞARIYLA GÖNDERİLDİ')
      
      
};

    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: [],
      permLevel: 2
    };

    exports.help = {
      name: 'dm',
      description: 'birine dm yollarsınız.',
      usage: 'dm'
    };
