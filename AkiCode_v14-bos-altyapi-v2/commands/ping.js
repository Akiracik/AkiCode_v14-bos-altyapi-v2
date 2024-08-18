const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'Botun ping durumunu gösterir.',
    execute(message, args) {
        const ping = message.client.ws.ping;

        const embed = new EmbedBuilder()
            .setColor('#0099ff')
            .setTitle('🏓 Pong!')
            .setDescription(`Botun pingi: ${ping}ms`)
            .setTimestamp();

        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel('Destek için tıkla')
                    .setStyle(ButtonStyle.Link)
                    .setURL('https://discord.com/invite/6SbCcgBRh8')
            );

        message.reply({ embeds: [embed], components: [row] });
    },
};