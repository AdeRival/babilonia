const Discord = require('discord.js');

exports.run = (bot, message) => {
    let user = message.mentions.users.first();
    if (!user) {
        return message.reply('Please specify the user by mentioning him, thanks!');
    }
    knexDB.from('bans').where('guildid', message.guild.id).andWhere('userid', user.id).then(row => {
        if (row.length > 0) {
            const embed1 = new Discord.RichEmbed()
        .addField(`History for ${user.username} inside ${message.guild.name}`, `bans: **${row[0].bancount}**\nkicks: **${row[0].kickcount}**\nmutes: **${row[0].mutecount}**\nsoftbans: **${row[0].softcount}**\nwarns: **${row[0].warncount}**`);
            message.channel.send({embed: embed1});
        } else {
            const embed = new Discord.RichEmbed()
        .addField(`History for ${user.username} inside ${message.guild.name}`, 'bans: 0\nkicks: 0\nmutes: 0\nsoftbans: 0\nwarns : 0');
            message.channel.send({embed})
        .catch(e => logger.error(e));
        }
    })
    .catch(e => logger.error(e));
}
module.exports.help = {
    name: 'history',
    aliases: ['his'],
    usage: "r!history @user",
    noalias: "No Aliases",
    accesableby: "Members"     
}