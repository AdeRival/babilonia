const Discord = require("discord.js");
const superagent = require("superagent");

exports.run = async (bot, message, args) => {

    let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!hugUser) return message.channel.send("Pastikan Kamu Memention Seseorang!");

    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/hug`);

    let hugEmbed = new Discord.RichEmbed()
    .setDescription(`**${message.author.username}** Memeluk **${message.mentions.users.first().username}**`)
    .setImage(body.url)
    .setColor("RANDOM")

    message.channel.send(hugEmbed)

}
module.exports.help = {
    name: "peluk",
    aliases: ["plk"],
    usage: "r!peluk @user",
    accesableby: "Anggota"
}
