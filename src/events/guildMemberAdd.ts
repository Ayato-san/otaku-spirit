import { BotEvent } from '../types'
import { GuildMember, Events, TextChannel, Channel } from 'discord.js'
import greet from '../embed/greet'
import { logServerEvent, updateMemberCount } from '../functions'

const event: BotEvent = {
    name: Events.GuildMemberAdd,
    execute: async (member: GuildMember) => {
        updateMemberCount(member.guild)
        logServerEvent(member.guild, member.user, 'Member Join', `New member joined: ${member.user.username}`)

        const channel: Channel = await member.guild.channels.fetch('859421922559131670')
        if (!channel.isTextBased) return
        const textChannel: TextChannel = channel as TextChannel

        textChannel.send({
            content: `Bienvenue, <@${member.user.id}>!`,
            embeds: [greet(member)],
        })
    },
}

export default event
