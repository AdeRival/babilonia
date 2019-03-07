module.exports.run = (bot, message, args) => {
    try {
      if (message.member.hasPermission("ADMINISTRATORS")) {
        if (message.mentions.users.size != 0) {
          if (message.mentions.members.first().bannable) {
            message.mentions.members.first().ban().then(m => {
              message.guild.unban(message.mentions.users.first()).then((err) => {
                channel.send(`:hammer: | **${m.user.username},** Telah di banned perhari oleh **${message.guild.name}**.`);
              })
            });
          } else {
            channel.send(`**${message.mentions.user.first().username},** Terlalu Istimewa Bagi Saya Untuk Dilarang.`);
          }
        } else {
          channel.send('Harap Beri Tag Pada Pengguna Yang Ingin Anda Softban.')
        }
      } else {
        channel.send('Anda Tidak Memiliki Izin Untuk Softban. Anda Harus Memiliki Izin `Administrators`.');
      }
    } catch (err) {
      channel.send(`Entah saya tidak bisa melarang **${message.mentions.users.first().username},** atau saya tidak memiliki izin untuk melarang anggota.`);
    }
  }
  module.exports.help = {
    name: "softban",
    aliases: [],
}