const { RichEmbed } = require('discord.js');

exports.run = async (bot, message, user) => {

    await message.delete().catch(O_o=>{});

    const a = message.guild.roles.get('551001179128332315');
    const b = message.guild.roles.get('551001235822608395');
    const c = message.guild.roles.get('551001280034897922');
    const d = message.guild.roles.get('551001323777032201');
    const e = message.guild.roles.get('551001758323703808');
    const f = message.guild.roles.get('551001854062886912');
    const g = message.guild.roles.get('551001899059380241');
    const h = message.guild.roles.get('551001985692991488');
    const i = message.guild.roles.get('551002080236666890');
    const j = message.guild.roles.get('551002278929367041');
    const k = message.guild.roles.get('551002307693641730');

    const filter = (reaction, user) => ['🇦', '🇧', '🇨', '🇩', '🇪', '🇫', '🇬', '🇭', 'ℹ', '🇯', '🇰'].includes(reaction.emoji.name) && user.id === message.author.id;

    const embed = new RichEmbed()
        .setTitle('**Peran Yang Tersedia Untuk Ditambahkan**')
        .setDescription(`
        
        🇦 ${a.toString()}
        🇧 ${b.toString()}
        🇨 ${c.toString()}
        🇩 ${d.toString()}
        🇪 ${e.toString()}
        🇫 ${f.toString()}
        🇬 ${g.toString()}
        🇭 ${h.toString()}
        ℹ ${i.toString()}
        🇯 ${j.toString()}
        🇰 ${k.toString()}
        
        `)
        .setColor('#25d5ed')
        .setFooter(`ID: ${message.author.id}`);

        message.channel.send(embed).then(async msg => {

            await msg.react('🇦');
            await msg.react('🇧');
            await msg.react('🇨');
            await msg.react('🇩');
            await msg.react('🇪');
            await msg.react('🇫');
            await msg.react('🇬');
            await msg.react('🇭');
            await msg.react('ℹ');
            await msg.react('🇯');
            await msg.react('🇰');

        });
    };
    
    exports.help = {
        name: 'welcomeroles',
        aliases: [],
    };