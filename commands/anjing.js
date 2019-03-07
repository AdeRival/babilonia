const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
    message.delete();
    let {body} = await superagent
    .get(`https://random.dog/woof.json`)

    let dogembed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle("Anjing :dog:")
    .setImage(body.url);

    message.channel.send(dogembed);
}
module.exports.help = {
    name: "anjing",
    aliases: ["ajg", "anjg"],
    usage: "r!anjing",
    accesableby: "Anggota"
}