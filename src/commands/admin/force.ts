import { SlashCommandBuilder, CommandInteraction } from 'discord.js'
import { SlashCommand } from '../../types'
import { updateMemberCount } from '../../functions'

export const command: SlashCommand = {
    name: 'force',
    data: new SlashCommandBuilder()
        .setName('force')
        .addSubcommandGroup((group) => {
            return group
                .setName('update')
                .setDescription('t')
                .addSubcommand((subcommand) =>
                    subcommand.setName('counter').setDescription('Update the member counter')
                )
        })
        .setDescription('Ping un rôle sans afficher sa mention'),
    execute: async (interaction: CommandInteraction) => {
        const subcommand = interaction.options['getSubcommand']()
        await interaction.reply({ content: 'force in progress', ephemeral: true })

        switch (subcommand) {
            case 'counter':
                await updateMemberCount(interaction.guild)
                break

            default:
                break
        }

        await interaction.deleteReply()
    },
}
