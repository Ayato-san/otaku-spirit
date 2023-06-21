import { Channel, Guild, User, VoiceChannel } from 'discord.js'
import { getUserMembers, toSmallCaps } from '.'

/**
 * Update the channel counter
 * @param guild the guild will be update
 * @returns void to wait update done
 */
export default async (guild: Guild): Promise<void> => {
    const channel: Channel = await guild.channels.fetch('1088041071038169129')
    if (!channel.isVoiceBased) return
    const voiceChannel: VoiceChannel = channel as VoiceChannel
    const users: User[] = await getUserMembers(guild)

    await voiceChannel.setName(toSmallCaps(`💫᲼᲼᲼᲼᲼members : ${users.length}`))
    return
}
