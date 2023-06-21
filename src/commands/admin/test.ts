import { SlashCommandBuilder, CommandInteraction, GuildMember } from 'discord.js'
import { SlashCommand } from '../../types'
import guildMemberAdd from '../../events/guildMemberAdd'

export const command: SlashCommand = {
    name: 'test',
    data: new SlashCommandBuilder()
        .setName('test')
        .addSubcommand((subcommand) => subcommand.setName('greet').setDescription('test the greet embed'))
        .addSubcommand((subcommand) => subcommand.setName('boost').setDescription('test the boost embed'))
        .setDescription("Commandes de test d'évent"),
    execute: async (interaction: CommandInteraction) => {
        const subcommand = interaction.options['getSubcommand']()
        await interaction.reply({ content: 'test in progress', ephemeral: true })

        switch (subcommand) {
            case 'greet':
                const member = interaction.member
                if (!(member instanceof GuildMember)) return
                guildMemberAdd.execute(member)
                break

            default:
                break
        }

        await interaction.deleteReply()
    },
}
