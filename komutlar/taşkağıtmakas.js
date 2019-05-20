const Discord = require("discord.js");
module.exports.run = (bot, message, args) => {

    let rock2 = ["Kağıt Sen Kazandın!", "Makas! Sen Kazandın!"]
    let rock1 = Math.floor(Math.random() * rock2.length);

    let paper2 = ["Taş!Sen Kazandın!", "Makas! Ben Kazandım!"]
    let paper1 = Math.floor(Math.random() * paper2.length);

    let scissors2 = ["Taş! Ben Kazandım!", "Kağıt! Sen Kazandın!"]
    let scissors1 = Math.floor(Math.random() * scissors2.length);

  let rock = new Discord.RichEmbed()
  .setAuthor("Taş, Kağıt, Makas")
  .setColor("#6b5858")
  .addField("sen seçtin", `${args[0]}`)
  .addField("ben seçtim", rock2[rock1])

  let paper = new Discord.RichEmbed()
  .setAuthor("Taş, Paper, Makas")
  .setColor("#6b5858")
  .addField("sen seçtin", `${args[0]}`)
  .addField("ben seçtim", paper2[paper1])

  let scissors = new Discord.RichEmbed()
  .setAuthor("Taş, Kağıt, Makas")
  .setColor("#6b5858")
  .addField("sen seçtin", `${args[0]}`)
  .addField("ben seçtim", scissors2[scissors1])


  if (message.content === "!rps rock") message.channel.send(rock)
  if (message.content === "!rps Rock") message.channel.send(rock)
  if (message.content === "!rps r") message.channel.send(rock)

  if (message.content === "!rps paper") message.channel.send(paper)
  if (message.content === "!rps Paper") message.channel.send(paper)
  if (message.content === "!rps p") message.channel.send(paper)

  if (message.content === "!rps scissors") message.channel.send(scissors)
  if (message.content === "!rps Scissors") message.channel.send(scissors)
  if (message.content === "!rps s") message.channel.send(scissors)


  if (message.content === "!rps") message.channel.send("Options: ``Rock``, ``Paper``, ``Scissors``. *Usage: !rps <option>*")
  }

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ping','p'],
    permLevel: 0
  };

  exports.help = {
    name: 'taşkağıtmakas',
    description: 'bot ile taş kağıt makas oynarsınız (YAPIMDA).',
    usage: 'taşkağıtmakas'
  };
