const antispam = require("discord-anti-spam");

exports.run = async (bot, message, user) => {

antispam(bot, {
    warnBuffer: 3, //Maximum amount of messages allowed to send in the interval time before getting warned.
    maxBuffer: 5, // Maximum amount of messages allowed to send in the interval time before getting banned.
    interval: 1000, // Amount of time in ms users can send a maximum of the maxBuffer variable before getting banned.
    warningMessage: "Halo, Jangan Spam. Bot Rival Memiliki Fitur Anti Spam. Kamu akan Diblokir Jika Kamu Melanjutkan.", // Warning message send to the user indicating they are going to fast.
    banMessage: " Telah Dibanned Karena Melakukan Spamming. Jangan Menguji Bot Rival Anti Spam. Adakah Yang Mau Mencoba?", // Ban message, always tags the banned user in front of it.
    maxDuplicatesWarning: 7, // Maximum amount of duplicate messages a user can send in a timespan before getting warned
    maxDuplicatesBan: 10, // Maximum amount of duplicate messages a user can send in a timespan before getting banned
    deleteMessagesAfterBanForPastDays: 7 // Delete the spammed messages after banning for the past x days.

});
}
module.exports.help = {
    name: "antispam",
    aliases: ["asp"],
    usage: "r!antispam",
    accesableby: "Anggota"
}