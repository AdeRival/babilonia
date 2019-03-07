const Discord = module.require('discord.js');
const ms = require('ms');

module.exports.run = async (bot, message, args) => {

  let Timer = args[0];

  if(!args[0]){
    return message.channel.send(":x: " + "| Silakan Masukkan Periode Waktu Diikuti Oleh \"s or m or h\"");
  }

  if(args[0] <= 0){
    return message.channel.send(":x: " + "| Silakan Masukkan Periode Waktu Diikuti Oleh \"s or m or h\"");
  }

  message.channel.send(":white_check_mark: " + "| Waktu Dimulai Dari " + `${ms(ms(Timer), {long: true})}`)

  setTimeout(function(){
    message.channel.send(message.author.toString() + ` Waktu SELESAI ! `)

  }, ms(Timer));
}

module.exports.help = {
  name: "waktu",
  aliases: ["wtu"],
  usage: "r!waktu (waktu)",
  accesableby: "Anggota"
}