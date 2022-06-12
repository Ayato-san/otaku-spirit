module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log(`${client.user.tag} is ready!`)

        const DEV_GUILD = client.guilds.cache.get('859421922559131668')

        DEV_GUILD.commands.set(client.commands.map(cmd => cmd))

        client.user.setPresence({
            activities: [{ name: 'Ayato-san', type: 'LISTENING' }],
            status: 'dnd'
        })
    }
}
