import { BotEvent } from '../types'
import { GuildMember, Events, Channel, TextChannel } from 'discord.js'
import { logServerEvent, updateMemberCount } from '../functions'
import leave from '../embed/leave'

const event: BotEvent = {
    name: Events.GuildMemberRemove,
    execute: async (member: GuildMember) => {
        updateMemberCount(member.guild)
        logServerEvent(member.guild, member.user, 'Member Left', `Member left: ${member.user.username}`)

        // const channel: Channel = await member.guild.channels.fetch('859421922559131670')
        // if (!channel.isTextBased) return
        // const textChannel: TextChannel = channel as TextChannel

        // textChannel.send({
        //     embeds: [leave(member)],
        // })
    },
}

export default event
