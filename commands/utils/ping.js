const { MessageEmbed } = require('discord.js')

const TITLE = '🏓  Pong!'
const COLOR = '#2196f3'

module.exports = {
    name: 'ping',
    description: 'Calcul and send the ping of the bot',
    run: (client, message, args) => {
        const embed = new MessageEmbed()
            .setTitle(TITLE)
            .setColor(COLOR)
            .setThumbnail(client.user.displayAvatarURL())
            .addFields(
                {
                    name: 'Latence',
                    value: `\`${client.ws.ping}ms\``,
                    inline: true
                },
                {
                    name: 'Ping',
                    value: `\`${
                        Date.now() -
                        message.createdTimestamp -
                        2 * Math.floor(client.ws.ping)
                    }ms\``,
                    inline: true
                }
            )
            .setTimestamp()
            .setFooter({
                text: message.author.username,
                iconURL: message.author.displayAvatarURL()
            })

        message.channel.send({ embeds: [embed] })
    },
    runSlash: (client, interaction) => {
        const embed = new MessageEmbed()
            .setTitle(TITLE)
            .setColor(COLOR)
            .setThumbnail(client.user.displayAvatarURL())
            .addFields(
                {
                    name: 'Latence',
                    value: `\`${client.ws.ping}ms\``,
                    inline: true
                },
                {
                    name: 'Ping',
                    value: `\`${
                        Date.now() -
                        interaction.createdTimestamp -
                        2 * Math.floor(client.ws.ping)
                    }ms\``,
                    inline: true
                }
            )
            .setTimestamp()
            .setFooter({
                text: interaction.user.username,
                iconURL: interaction.user.displayAvatarURL()
            })

        interaction.reply({ embeds: [embed] })
    }
}
