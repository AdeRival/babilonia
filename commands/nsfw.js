const Discord = require("discord.js");
const superagent = require("superagent");
const send = require("quick.hook");

module.exports.run = async (bot, message, args) => {

    let {body} = await superagent
    .get(`https://nekos.life/api/lewd/neko`);
    if (!message.channel.nsfw) return message.reply("You can use this command only on nsfw channels!");

    message.delete();
    let hentaiEmbed = new Discord.RichEmbed()
    .setColor("#ff9900")
    .setTitle("Make This Life More Colour..!")
    .setImage(body.neko)
    .setFooter("Upss");

    message.channel.send(hentaiEmbed);

}

module.exports.help = {
    name: "lewd",
    aliases: ["lew"],
    usage: "r!lewd",
    accesableby: "Anggota"
}