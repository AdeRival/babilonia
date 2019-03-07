const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

    message.delete();
    let {body} = await superagent
    .get(`https://aws.random.cat//meow`)

    let dogembed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle("Kucing :cat:")
    .setImage(body.file);

    message.channel.send(dogembed);
}
module.exports.help = {
    name: "kucing",
    aliases: ["cat", "kuc"],
    usage: "r!kucing",
    accesableby: "Anggota"
}