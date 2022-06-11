module.exports = {
    name: 'interactionCreate',
    once: false,
    async execute(client, interaction) {
        if (interaction.isCommand()) {
            const cmd = client.commands.get(interaction.commandName)

            if (!cmd)
                return interaction.reply({
                    content: "this command doesn't exist",
                    ephemeral: true
                })

            cmd.runSlash(client, interaction)
        }
    }
}
