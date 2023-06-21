import { BaseMessageOptions, CommandInteraction } from 'discord.js'

export default async (interaction: CommandInteraction, options: string | BaseMessageOptions): Promise<void> => {
    await interaction.reply({
        content: 'sending message',
        ephemeral: true,
    })
    await interaction.channel.send(options)
    await interaction.deleteReply()
}
