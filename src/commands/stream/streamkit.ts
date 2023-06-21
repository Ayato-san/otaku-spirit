import { CommandInteraction, GuildMember, SlashCommandBuilder, VoiceBasedChannel } from 'discord.js'
import { SlashCommand } from '../../types'

export const command: SlashCommand = {
    name: 'streamkit',
    data: new SlashCommandBuilder()
        .setName('streamkit')
        .setDescription("Donne l'url du stream kit discord pour le channel vocal courrant")
        .addUserOption((option) => {
            return option.setName('username').setDescription("L'utilisateur pour qui faire le streamkit")
        }),
    execute: async (interaction: CommandInteraction) => {
        const member = interaction.options.get('username')?.member || interaction.member

        if (!(member instanceof GuildMember)) return

        const channel: VoiceBasedChannel = member.voice.channel
        if (!channel) {
            await interaction.reply(`${member}> n'est connecter sur aucun vocal connu`)
            return
        }
        const guildId: string = channel.guildId
        await interaction.reply(
            `voici le streamkit pour ${member}> : <https://streamkit.discord.com/overlay/voice/${guildId}/${channel.id}>`
        )
    },
}
