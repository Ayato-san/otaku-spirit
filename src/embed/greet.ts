import { EmbedBuilder, GuildMember } from 'discord.js'

const ruleChannel: string = '776792649126248468'
const roleChannel: string = '780383627636506645'

const rows: string[] = [
    `- lis les règles᲼᲼ : <#${ruleChannel}>`,
    `- check les roles : <#${roleChannel}>`,
    '- [lien au serv](https://ayato-san.fr/discord)',
]

export default (member: GuildMember): EmbedBuilder => {
    return new EmbedBuilder()
        .setAuthor({ name: member.user.tag, iconURL: member.user.avatarURL() })
        .setTitle(`Bienvenue dans ${member.guild.name}, bg!`)
        .setThumbnail(member.guild.iconURL())
        .setDescription(rows.join('\n'))
        .setFooter({ text: 'Passe du bon temps avec nous bg' })
        .setTimestamp(Date.now())
        .setColor('#2196f3')
}
