import { CommandInteraction, SlashCommandBuilder } from 'discord.js'
import { SlashCommand } from '../../types'

export const command: SlashCommand = {
    name: 'ping',
    data: new SlashCommandBuilder().setName('ping').setDescription('Affiche le ping du bot'),
    execute: async (interaction: CommandInteraction) => {
        await interaction.reply(
            `Le ping de ${interaction.client.user?.username} est de ${interaction.client.ws.ping}ms`
        )
    },
}

