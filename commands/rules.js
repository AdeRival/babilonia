const Discord = module.require('discord.js');

var rules1 = new Discord.RichEmbed()
        .addField("Rules (1/2):", "---------------------------------------------------------------------------------------\n" +
                                  "__**1.**__ Tidak ada spamming atau membanjiri obrolan dengan pesan, simbol atau gambar dll. \n" +
                                  "__**2.**__ Jangan ketik semua Caps, Bold, Italic, atau format lain kecuali Anda seorang Admin. \n" +
                                  "__**3.**__ dewasa (18+), gambar eksplisit dll, buka saluran NSFW. \n" +
                                  "__**4.**__ Tidak ada konten rasis atau merendahkan.\n" +
                                  "__**5.**__ Tidak mengutuk secara berlebihan. \n" +
                                  "__**6.**__ Tidak ada iklan situs lain / server perselisihan tanpa izin. \n" +
                                  "__**7.**__ Tidak memposting tautan eksternal selain tautan langsung ke youtube\n", true)

        .setColor("0xFF0000")

var rules2 = new Discord.RichEmbed()
        .addField("Rules (2/2):", "__**8.**__ Tidak menggunakan nama pengguna lain dan/atau menyamar sebagai orang lain. \n" +
                                  "__**9.**__ Jangan mengemis atau berulang kali meminta izin dalam obrolan. \n" +
                                  "__**10.**__ Tidak ada nama atau nama ofensif yang mengandung kata-kata umpatan. \n" +
                                  "__**11.**__ Jangan berdebat dengan staf di sana keputusan bersifat final. \n" +
                                  "__**12.**__ Jangan berulang kali mengirim pesan kepada Moderator atau Admin tanpa izin \n" +
                                  "__**13.**__ Jangan mengirim pesan ke orang, Moderator, atau Admin dengan pertanyaan yang aneh \n" +
                                  "---------------------------------------------------------------------------------------\n", true)

        .setColor("0xFF0000")

module.exports.run = async (bot, message, args) => {

//console.log(args[0]);// user
//console.log(args[1]);// role
//console.log(args[2]);//time


            message.channel.send(rules1)
            message.channel.send(rules2)

              .then(function (message) {
                message.react("👌🏻");
              
              })

}

module.exports.help = {
        name: "rules",
        aliases: ["rule"],
        usage: "r!rules",
        accesableby: "Anggota"
}