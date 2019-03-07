const Discord = module.require('discord.js');

var hd = [
    "**HEADS**",
    "**TAILS**"
];

module.exports.run = async (bot, message, args) => {

  message.channel.send(message.author.toString() + " Melemparkan Koin Dan Mendapatkan " + (hd[Math.floor(Math.random() * hd.length)]));
}

module.exports.help = {
  name: "coinflip",
  aliases: ["cf", "cp", "cfp"],
  usage: "r!coinflip",
  accesableby: "Anggota"
}