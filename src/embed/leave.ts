import { EmbedBuilder, GuildMember } from 'discord.js'

export default (member: GuildMember): EmbedBuilder => {
    return new EmbedBuilder()
        .setAuthor({ name: member.user.tag, iconURL: member.user.avatarURL() })
        .setTitle('Au revoir bg!')
        .setThumbnail(member.guild.iconURL())
        .setFooter({ text: `Reviens quand tu veut dans ${member.guild.name}` })
        .setTimestamp(Date.now())
        .setColor('#2196f3')
}
