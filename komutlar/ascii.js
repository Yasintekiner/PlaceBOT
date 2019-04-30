var figlet = require('figlet');

module.exports.run = (client, message, args, tools) => {
  
  var maxLen = 100 // Kendiniz en yüksek harf sayısını ayarlayabilirsiniz
  
  if(args.join(' ').length > maxLen) return message.channel.send(`En fazla ${maxLen} karakterlik bir mesaj yazabilirsin!`) 
  
  if(!args[0]) return message.channel.send('Lütfen bir mesaj yazın...');
  
  figlet(`${args.join(' ')}`, function(err, data) {
      if (err) {
          console.log('Bir hata var...');
          console.dir(err);
          return;
      }

      message.channel.send(`${data}`, {code: 'AsciiArt'});
  });

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ascii',
  description: 'Asci Bir yazı yazarsınız.',
  usage: 'ascii'
};