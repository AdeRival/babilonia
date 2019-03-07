const Discord = module.require('discord.js');
const ms = require('ms');

module.exports.run = async (bot, message, args) => {
  message.delete();
  if(message.member.hasPermission("ADMINISTRATOR")) {
            let member2 = message.mentions.members.first();
            if(!member2) return message.reply(":x: " + "| Tolong Mention Seseorang Untuk Diberikan Role");

            let muteRole2 = message.mentions.roles.first();
            if(!muteRole2) return message.reply(":x: " + `| Tidak Ada Role Seperti Itu`);
            
            let time2 = args[2];
            if(!time2) {
              member2.addRole(muteRole2.id);
              message.channel.send(member2 + ` Berhasil Menambahkan Role ` + muteRole2.name);
            }else {
              member2.addRole(muteRole2.id);
              message.channel.send(member2 + ` Kamu Telah Diberi Role ` + muteRole2.name + ` for: ${ms(ms(time2), {long: true})}`);

              setTimeout(function(){
                member2.removeRole(muteRole2.id);
                message.channel.send(member2 + ` Role Mute Kamu Udah Dicabut Dan Kamu Sekarang Udah Bebas ${ms(ms(time2), {long: true})}`)

              }, ms(time2));

              };
              }else {
                return message.reply(":x: " + "| Kamu Membutuhkan \"ADMINISTRATOR\" Permission")
              };
}

module.exports.help = {
    name: "tambahrole",
    aliases: ["add", "tbr","removerole"],
}