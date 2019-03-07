const Discord = module.require('discord.js');

var Responses = [
    "Ya",
    "Tidak",
    "Mungkin",
    "Tidak Tahu, Coba Lagi",
    "Tentu Saja Tidak, Coba Lagi Mungking",
    "Aku Rasa Begitu",
    "Jika Kau Mengatakan Tidak",
    "Aku Tidak Menjawab Apapun Tapi Kau Mungkin Tahu Jawabannya",
    "Pasti Saja Tidak",
    "Itu Sebuah Kemungkinan",
    "Kesempatan Pelukan",
    "Hanya Sedikit Kesempatan",
    "Lebih Baik Berharap Begitu",
    "Lebih Baik Tidak Berharap Begitu"
];

module.exports.run = async (bot, message, args) => {

    if(!args[0]){
        return message.channel.send(":x: " + "| Tolong Sertakan Seseorang/Objek")
    }

    if (args[0]) {
        message.channel.send(Responses[Math.floor(Math.random() * Responses.length)]);
    }

}
module.exports.help = {
    name: "cinta",
    aliases: ["cin", "cta"],
    usage: "r!cinta",
    accesableby: "Anggota"
}