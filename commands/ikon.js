const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let msg = await message.channel.send("Generating icon...");

if(!message.guild.iconURL) return msg.edit("Tidak Ada Ikon Yang Ditemukan!");

let iconembed = new Discord.RichEmbed()
.setColor("00ff00")
.setFooter("Dicari Oleh " + message.author.tag)
.setImage(message.guild.iconURL)
.setTitle("Ikon")
.setDescription("[Ikon URL Link]("+message.guild.iconURL+")")

message.channel.send(iconembed)
    
    msg.delete();
 }

    module.exports.help = {
        name: "ikon",
        aliases: ["iko", "ikn"],
        usage: "r!ikon",
        accesableby: "Anggota"        
    }