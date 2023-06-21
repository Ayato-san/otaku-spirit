import { CommandInteraction, SlashCommandBuilder } from 'discord.js'
import { SlashCommand } from '../../types'
import { sendMessage } from '../../functions'

export const command: SlashCommand = {
    name: 'message',
    data: new SlashCommandBuilder()
        .setName('message')
        .setDescription('Affiche un message')
        .addStringOption((option) => {
            return option.setName('message').setDescription('Message à afficher').setRequired(true)
        }),
    execute: async (interaction: CommandInteraction) => {
        const message: string = interaction.options.get('message').value.toString().split('\\n').join('\n')
        await sendMessage(interaction, message)
    },
}

