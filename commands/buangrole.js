const Discord = module.require('discord.js');
const ms = require('ms');

module.exports.run = async (bot, message, args) => {

if(message.member.hasPermission("ADMINISTRATOR")) {
  let member3 = message.mentions.members.first();
  if(!member3) return message.reply(":x: " + "| Tolong Mention Seseorang Untuk Menghapus Role");

  let muteRole3 = message.mentions.roles.first();
  if(!muteRole3) return message.reply(":x: " + `| Tidak Ada Yang Namanya \"${muteRole3.name}\" Role!`);

  member3.removeRole(muteRole3.id);
  message.channel.send(member3 + ` Telah Menghapus Role ` + muteRole3.name);

  }else {
    return message.reply(":x: " + "| Kamu Membutuhkan \"ADMINISTRATOR\" Permission")
  };
}

module.exports.help = {
    name: "buangrole",
    aliases: ["rr", "br"],
}