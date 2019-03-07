const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete();
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Informasi Bot")
    .setColor('RANDOM')
    .setThumbnail(bicon)
    .addField("Nama Bot", bot.user.username)
    .addField("Dibuat Di", bot.user.createdAt)
    .addField("Pemilik Bot", 'Aderival#9233')
    .addField("Tipe Bot", 'Moderation,Fun,Music');
    message.channel.send(botembed);
}

module.exports.help = {
  name: "botinfo",
  aliases: ["bi", "bot", "bf"],
  usage: "r!botinfo",
  accesableby: "Anggota"
}