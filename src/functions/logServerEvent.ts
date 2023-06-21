import { Guild, TextChannel, User } from 'discord.js'
import log from '../embed/log'

const LOG_CHANNEL_ID = '1120693965864304711'

export default async (guild: Guild, user: User, title: string, message: string): Promise<string> => {
    const logChannel = guild.channels.cache.get(LOG_CHANNEL_ID) as TextChannel
    if (!logChannel) return

    try {
        await logChannel.send({ embeds: [log(user, title, message)] })
    } catch (error) {
        console.error('Error logging server event:', error)
    }
}
