const ascii = require('ascii-art');

module.exports.run = async (bot, message, args) => {
    ascii.font(args.join(' '), 'Doom', function(rendered) {
        rendered = rendered.trimRight();

        if (rendered.length > 10000) return message.channel.send('Maaf, Pesan Itu Terlalu Panjang');

        message.channel.send(rendered, {
            code:'md'
        });
    });
}
module.exports.help = {
    name:"ascii",
    aliases: [],
  }