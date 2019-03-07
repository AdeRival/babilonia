const Discord = require("discord.js");
module.exports.run = (bot, message, args) => {
  
    let rock2 = ["Kertas! Aku menang!", "Gunting! Kamu menang!"]
    let rock1 = Math.floor(Math.random() * rock2.length);
  
    let paper2 = ["Batu! Kamu menang!", "Gunting! Aku menang!"]
    let paper1 = Math.floor(Math.random() * paper2.length);
  
    let scissors2 = ["Batu! Aku menang!", "Kertas! Kamu menang!"]
    let scissors1 = Math.floor(Math.random() * scissors2.length);
  
  let rock = new Discord.RichEmbed()
  .setAuthor("Batu, Gunting, Kertas")
  .setColor("#6b5858")
  .addField("Kamu Memilih", `${args[0]}`)
  .addField("Aku Memilih", rock2[rock1])
  
  let paper = new Discord.RichEmbed()
  .setAuthor("Batu, Gunting, Kertas")
  .setColor("#6b5858")
  .addField("Kamu Memilih", `${args[0]}`)
  .addField("Aku Memilih", paper2[paper1])
  
  let scissors = new Discord.RichEmbed()
  .setAuthor("Batu, Gunting, Kertas")
  .setColor("#6b5858")
  .addField("Kamu Memilih", `${args[0]}`)
  .addField("Aku Memilih", scissors2[scissors1])
  
  
  if (message.content === "+bgk batu") message.channel.send(rock)
  if (message.content === "+bgk Batu") message.channel.send(rock)
  if (message.content === "+bgk b") message.channel.send(rock)
  
  if (message.content === "+bgk kertas") message.channel.send(paper)
  if (message.content === "+bgk Kertas") message.channel.send(paper)
  if (message.content === "+bgk k") message.channel.send(paper)
  
  if (message.content === "+bgk gunting") message.channel.send(scissors)
  if (message.content === "+bgk Gunting") message.channel.send(scissors)
  if (message.content === "+bgk g") message.channel.send(scissors)
  
  
  if (message.content === "+bgk") message.channel.send("Pilihan: ``Batu``, ``Gunting``, ``Kertas``. *Penggunaan: +bgt <pilihan>*")
  }

module.exports.help = {
  name: "bgk",
  aliases: ["bg"],
  usage: "r!bgk",
  accesableby: "Anggota"
}