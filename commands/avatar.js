const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Generating avatar...");

    let mentionedUser = message.mentions.users.first() || message.author;

        let embed = new Discord.RichEmbed()

        .setImage(mentionedUser.displayAvatarURL)
        .setColor("00ff00")
        .setTitle("Avatar")
        .setFooter("Searched By" + message.author.tag)
        .setDescription("[Avatar URL link]("+mentionedUser.displayAvatarURL+")");

        message.channel.send(embed)


    msg.delete();
}

module.exports.help = {
    name: "avatar",
    aliases: ["ava", "a", "avr"],
    usage: "r!avatar",
    accesableby: "Anggota"
}