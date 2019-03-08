const Discord = require("discord.js");
const { prefix } = require('../config.js')

exports.run = async (bot, message, level) => {
    if (!message.content.startsWith(prefix)) return;

    message.channel.send('**NGEROKOK DULU KITA LAY :v**').then(async msg => {
        setTimeout(() => {
            msg.edit('🚬');
        }, 500);
        setTimeout(() => {
            msg.edit('🚬 ☁ ');
        }, 1000);
        setTimeout(() => {
            msg.edit('🚬 ☁☁ ');
        }, 1500);
        setTimeout(() => {
            msg.edit('🚬 ☁☁☁ ');
        }, 2000);
        setTimeout(() => {
            msg.edit('🚬 ☁☁');
        }, 2500);
        setTimeout(() => {
            msg.edit('🚬 ☁');
        }, 3000);
        setTimeout(() => {
            msg.edit('🚬 ');
        }, 3500);
        setTimeout(() => {
            msg.edit(`Selesai ngerokok`);
        }, 4000);
    });
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "rokok",
    aliases: [],
    category: "Fun",
    description: "Ngerokok Setiap Hari :dab:",
    usage: "r!rokok"
};
