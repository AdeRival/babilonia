const Discord = module.require('discord.js');

var fortunes = [
  '🎱 **| Seperti Yang Saya Lihat Ya**',
  '🎱 **| Tanya Lagi Nanti**',
  '🎱 **| Lebih Baik Tidak Memberitahu Anda Sekarang**',
  '🎱 **| Tidak Dapat Memprediksi Sekarang**',
  '🎱 **| Berkonsentrasi dan Tanyakan Lagi**',
  '🎱 **| Jangan Mengandalkannya**',
  '🎱 **| Sudah Pasti,**${message.author.username}**',
  '🎱 **| Sudah Diputuskan**',
  '🎱 **| Yang Paling Disukai**',
  '🎱 **| Jawabanku Tidak**',
  '🎱 **| Sumber Saya Mengatakan Tidak**',
  '🎱 **| Kelihatannya Bagus**',
  '🎱 **| Kelihatannya Tidak Begitu Baik**',
  '🎱 **| Konsentrasi Dan Tanya Lagi**',
  '🎱 **| Tanda Menunjuk ke Ya**',
  '🎱 **| Sangat Diragukan**',
  '🎱 **| Tanpa Keraguan**',
  '🎱 **| Iya Nih**',
  '🎱 **| Iya Tentu Saja**'
];


module.exports.run = async (bot, message, args) => {

if(!args[0]){
  return message.channel.send(":x: " + "| Tolong Berikan Jawaban Dan Aku Akan Menjawabnya")
}
if (args[0]) message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
else message.channel.send(":x: " + "| Saya Tidak Bisa Membacanya :( ");
}

module.exports.help = {
    name: "8ball",
    aliases: ["8b", "ball"],
    usage: "r!8ball",
    accesableby: "Anggota"
}