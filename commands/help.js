const Discord = require("discord.js");
const prefix = 'r!';

module.exports.run = async (bot, message, args) => {
    if(args[0] == "help") return message.channel.send(`Ketik **${prefix}help** Untuk Selengkapnya.`)

    if(args[0]) {
        let command = args [0];
        if(bot.commands.has(command)) {
            command = bot.commands.get(command);
            let SHembed = new Discord.RichEmbed()
            .setColor('#33f0f7')
            .setAuthor('Rival Help Commands', bot.user.displayAvatarURL)
            .setThumbnail(bot.user.displayAvatarURL)
            .setDescription(`Bot Prefix: ${prefix}\n\n**Perintah:** ${command.config.name}\n**Deskripsi:** ${command.config.description || "Help Command"}\n**Penggunaan:** ${command.config.usage || "Usage"}\n**Diakses Oleh:** ${command.config.accesableby || "Members"}\n**Aliases:** ${command.config.noalias || command.config.aliases}`)
            message.channel.send(SHembed)

        }};

    if(!args[0]) {

        message.delete()
        let Sembed = new Discord.RichEmbed()
        .setColor('#33f0f7')
        .setAuthor('Rival Help Commands', bot.user.displayAvatarURL)
        .setThumbnail(bot.user.displayAvatarURL)
        .setTimestamp()
        .setDescription(`**BOT Prefix**: \`${prefix}\`\n**⬇️Perintah Yang Tersedia Pada Rival BOT⬇️**`)
        .addField(`\`👻Fun⬇️\``, '**quotes**→``Untuk memberi inspirasi hidup``\n**poll**→``Masih misteri``\n**ow**→``Hanya untuk Overwatch Battletag``\n**yomama**→``Memperlihatkan joke yomama``\n**anjing**→``Melihatkan gambar anjing``\n**kucing**→``Melihatkan gambar kucing``\n**rokok**→``Ngerokok biar ga bete``\n**gifs**→``Menampilkan gifs lucu``\n**cium**→``Mencium seseorang``\n**peluk**→``Peluk Seseorang``\n**tampar**→``Tampar Seseorang``\n**candy**→``Membeli sebuah permen``\n**bgt**→``Mainkan game batu-gunting-kertas``\n**anime**→``Mencari anime``\n**8ball**→``Tanya dan jawab``\n**jokeayah**→``Menampilkan joke ayah``\n**cinta**→``Ungkapkan cinta pada seseorang``\n**coninflip**→``Flipcoin heads dan tails``\n**pepe**→``Memunculkan gambar pepe``\n**pat**→``Menghelus kepala seseorang``\n')
        .addField(`\`🔒Administrator⬇️\``, '**unmute**→``Unmute user yang dimute``\n**ban**→``Ban seseorang``\n**softban**→``Ban orang menggunakan waktu tertentu``\n**warn**→``Peringatan untuk seseorang yang telah melakukan spam/lainnya``\n**mute**→``Mute seseorang``\n**unmute**→``Unmute seseorang yang sedang di mute``\n**clean**→``Bersihkan atau prune message``\n**kick**→``Kick seseorang``\n**votekick**→``Melakukan vote untuk kick``\n**vote**→``Melakukan vote``\n**report**→``Melaporkan seseorang``\n')
        .addField(`\`🔮Utility⬇️\``, "**quotes**→``Dapatkanlah quotes untuk inspirasi hidup``\n**photograph**→``Memunculkan photograph yang keren``\n**rate**→``Menilai seseorang``\n**say**→``Mengtik apa yang kamu ketik``\n**embed**→``Melakukan text embed``\n**lewd**→``Menampilkan gambar hentai/NSFW``\n**addrole**→``Tambahkan role ke seseorang``\n**removerole**→``Membuang role seseorang``")
        .addField(`\`📝Information⬇️\``, '**urban**→``Cari makna text menggunakan urban``\n**history**→``Menampilkan history warn/ban user``\n**infopengguna**→``Menampilkan Info Pengguna``\n**uptime**→``Menampilkan uptime bot``\n**serverinfo**→``Memunculkan info dalam server``\n**stats**→``Menampilkan stats``\n**invitestats**→``Menampilkan invitestats yang terdikit-terbanyak``\n**date**→Info tanggal-bulan-tahun,dan waktu')
        .setFooter('Rival Development Bot', bot.user.displayAvatarURL)
        message.channel.send(Sembed)
    }
}
module.exports.help = {
    name: "help",
    aliases: ["h", "commands"],
    usage: "r!help",
    noalias: "No Aliases",
    accesableby: "Members"
}
