module.exports = {
    name: 'ping',
    description: 'responde pond',
    run: (client, message, args) => {
        message.channel.send('Pong!')
    },
    runSlash: (client, interaction) => {
        interaction.reply('Pong!')
    }
}
