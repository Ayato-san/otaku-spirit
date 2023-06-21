import { EmbedBuilder, User } from 'discord.js'

export default (user: User, title: string, message: string): EmbedBuilder => {
    return new EmbedBuilder()
        .setColor('#2196f3')
        .setTitle(title)
        .setAuthor({ name: user.username, iconURL: user.avatarURL() })
        .setDescription(`${user}\n` + message)
        .setTimestamp()
        .setFooter({ text: `ID : ${user.id}` })
}
